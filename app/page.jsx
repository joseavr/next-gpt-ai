import Image from 'next/image'
import { Chat } from './components/Chat'

export default function Home() {
	return (
		<div className="h-screen">
			<Chat />
		</div>
	)
}
