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


export const AILogoPrompt = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate a text prompt to create Logo for Logo Title/Brand name : indian food,with description: modern, with Color combination of Minty Fresh, also include the Geometric Mountain Peak Icon and include Modern Sharp Lined Logos design idea and Referring to this Logo Prompt:Design a creative and artistic logo with a retro-modern vibe that showcases the brand's identity. Use bold outlines, intricate patterns, and vibrant, contrasting colors to make the design pop. Incorporate thematic elements like food, nature, technology, or lifestyle symbols depending on the brand's niche. The typography should be playful yet clear, complementing the overall composition with a dynamic and balanced layout. Ensure the logo feels unique, versatile, and eye-catching  Give me result in JSON portal with prompt field only"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"prompt\": \"Create a modern logo for the brand 'Indian Food'. The logo should have a Minty Fresh color combination and incorporate a geometric mountain peak icon. The design should be modern and sharp-lined.  The logo should have a retro-modern vibe, using bold outlines, intricate patterns, and vibrant, contrasting colors to make the design pop. Incorporate thematic elements like food. The typography should be playful yet clear, complementing the overall composition with a dynamic and balanced layout. The logo should feel unique, versatile, and eye-catching.\"\n}\n```\n"},
        ],
      },
    ],
  });

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text())
