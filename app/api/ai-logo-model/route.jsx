import { AILogoPrompt } from "@/configs/AiModel";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {

    const { prompt } = await req.json();

    try {

        const AiPromptResult = await AILogoPrompt.sendMessage(prompt)

        console.log(JSON.parse(AiPromptResult.response.text()).prompt)
        const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt


        const response = await axios.post('https://router.huggingface.co/hf-inference/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA',
            AIPrompt, {
            headers: {
                Authorization: "Bearer ",
                "Content-Type": "application/json",
            },
            responseType: "arraybuffer"
        }

        )


        const buffer = Buffer.from(response.data, "binary")
        const base64Image = buffer.toString("base64")

        const base64ImageWithMime = `data:image/png;base64,${base64Image}`
        console.log(base64ImageWithMime)

        return NextResponse.json({ image: base64ImageWithMime })
    } catch (e) {
        return NextResponse.json({ error: e });
    }
}
