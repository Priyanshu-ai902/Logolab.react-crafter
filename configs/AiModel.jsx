const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai")

const apikey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apikey)

const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp"
})

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json"
}


export const AIDesignIdea = model.startChat({
    generationConfig,
    history: [
        {
            role: "user",
            parts: [
                { text: "Based on logo of types modern mascot logos generate a text prompt to create a unique mascot logo idea. " }
            ]

        },
        {
            role: "model",
            parts: [
                {
                    text: "```json\n{\n \"ideas\": [\n  \"Chef Elephant with spices\",\n  \"Samurai Tiger with a sword\",\n  \"Astronaut Panda floating in space\",\n  \"Cool Fox wearing sunglasses\",\n  \"Wizard Owl holding a magic staff\"\n ]\n}\n```"
                }
            ]

        },

    ]
});


// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text())
