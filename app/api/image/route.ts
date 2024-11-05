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
        const { prompt, amount = 1, resolution = "512x512" } = body;

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        if (!prompt) {
            return new NextResponse("Prompt is required", { status: 400 });
        }
        if (!amount) {
            return new NextResponse("Amount is required", { status: 400 });
        }
        if (!resolution) {
            return new NextResponse("Resolution is required", { status: 400 });
        }

        const response = await openai.images.generate({
            prompt: prompt,
            n: parseInt(amount, 10),
            size: resolution
        })

        return NextResponse.json(response.data);
    } catch (error) {
        console.log("[IMAGE_ERROR]", error);

        if(error instanceof OpenAI.APIError) {
            return new NextResponse(error.message, { status: error.status })
        } else {
            return new NextResponse("Internal error", { status: 500 })
        }

    }
}