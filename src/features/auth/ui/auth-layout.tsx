import { type FC, ReactNode } from 'react'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/shared/ui/kit/card.tsx'

interface Props {
	title: ReactNode
	form: ReactNode
	footer: ReactNode
}

export const AuthLayout: FC<Props> = ({ title, form, footer }) => {
	return (
		<main className='grow flex flex-col justify-center items-center container mx-auto'>
			<Card className='w-full max-w-[400px]'>
				<CardHeader>
					<CardTitle className='text-center'>{title}</CardTitle>
				</CardHeader>
				<CardContent>{form}</CardContent>
				<CardFooter>{footer}</CardFooter>
			</Card>
		</main>
	)
}
