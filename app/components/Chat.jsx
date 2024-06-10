'use client'

import { useChat } from 'ai/react'

export function Chat() {
	const { messages, input, handleInputChange, handleSubmit } = useChat()

	return (
		<div className="relative flex flex-col justify-center max-w-xl mx-auto h-full">
			<div className="flex flex-col gap-y-3">
				{messages.map((message) => {
					const isGPT = message.role !== 'user'
					return (
						<div className="flex gap-3" key={message.id}>
							<span>{isGPT ? '🤖' : '🧑‍💻'}</span>
							<p className="">
								<span className={isGPT ? 'text-yellow-500' : ''}>
									{message.content}
								</span>
							</p>
						</div>
					)
				})}
			</div>

			<div className="absolute bottom-10 left-0 w-full max-w-xl">
				<form className="" onSubmit={handleSubmit}>
					<input
						className="w-full px-4 py-2 m-auto border border-gray-400 rounded-full shadow-xl "
						type="text"
						name="content"
						value={input}
						placeholder="Say something..."
						onChange={handleInputChange}
					/>
				</form>
			</div>
		</div>
	)
}
