import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { OpenAI } from "openai"

const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY });

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";

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

        if (!checkApiLimit()) {
            return new NextResponse("Free trial has expired", { status: 403 })
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages
        })

        await increaseApiLimit();
    
        return NextResponse.json(response.choices[0].message);
    } catch (error) {
        console.log("[CONVERSATION_ERROR]", error);

        if (error instanceof OpenAI.APIError) {
            return new NextResponse(error.message, { status: error.status })
        } else {
            return new NextResponse("Internal error", { status: 500 })
        }

    }
}