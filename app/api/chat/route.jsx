import { Configuration, OpenAIApi } from "openai-edge"
import { OpenAIStream, StreamingTextResponse } from "ai"

// Tell Vercel to use this endpoint
export const runtime = "edge"

// -> edge: better performance and support data streaming, request in miliseconds
// -> default: worst performance, no no data streaming, request in seconds

// Create OPENAI Client
const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(config)

export async function POST(req, res) {
	// Fetch OpenAi
	const response = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		stream: true,
		messages: [
			{
				role: "system",
				content:
					"You are a helpful assistant for finding songs links for coding on youtube. You may respond to general questions from user.",
			},
		],
		max_tokens: 500,
		temperature: 0.7,
		top_p: 1,
		frequency_penalty: 1,
		presence_penalty: 1,
	})
	// Transform OpenAI response to a text-stream
	const stream = OpenAIStream(response)
	return new StreamingTextResponse(stream)
}
