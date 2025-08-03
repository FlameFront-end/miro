import { type FC } from 'react'
import { useForm } from 'react-hook-form'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/shared/ui/kit/form.tsx'
import { Input } from '@/shared/ui/kit/input.tsx'
import { Button } from '@/shared/ui/kit/button.tsx'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useLogin } from '@/features/auth/model/use-login.ts'

const loginSchema = z.object({
	email: z
		.string({
			error: 'Email обязателен'
		})
		.email('Неверный email'),
	password: z
		.string({
			error: 'Пароль обязателен'
		})
		.min(6, 'Пароль должен быть не менее 6 символов')
})

export const LoginForm: FC = () => {
	const { login, isPending, errorMessage } = useLogin()

	const form = useForm({
		resolver: zodResolver(loginSchema)
	})

	const onSubmit = form.handleSubmit(login)

	return (
		<Form {...form}>
			<form onSubmit={onSubmit} className='flex flex-col gap-4'>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type='email'
									placeholder='admin@gmail.com'
									onInvalid={e => e.preventDefault()}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input
									type='password'
									placeholder='**********'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{errorMessage && (
					<p className='text-destructive text-sm'>{errorMessage}</p>
				)}

				<Button type='submit' disabled={isPending}>
					Войти
				</Button>
			</form>
		</Form>
	)
}
