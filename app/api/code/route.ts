import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { OpenAI } from "openai"
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const openai = new OpenAI({apiKey: process.env.OPEN_API_KEY});

const instructionMessage: ChatCompletionMessageParam = {
    role: "system",
    content: "You are a code generator."
}

export async function POST(req: Request) {
    try {

        const { userId } = await auth();
        const body = await req.json();
        const { messages } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if (!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [instructionMessage, ...messages]
        })

        return NextResponse.json(response.choices[0].message);
    } catch (error) {
        console.log("[CODE_ERROR]", error);

        if(error instanceof OpenAI.APIError) {
            return new NextResponse(error.message, { status: error.status })
        } else {
            return new NextResponse("Internal error", { status: 500 })
        }

    }
}