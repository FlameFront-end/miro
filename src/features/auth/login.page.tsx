import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/model/routes.ts'
import { Button } from '@/shared/ui/kit/button.tsx'
import { AuthLayout } from '@/features/auth/ui/auth-layout.tsx'
import { LoginForm } from '@/features/auth/ui/login-form.tsx'

export const LoginPage = () => {
	return (
		<AuthLayout
			title='Вход в систему'
			form={<LoginForm />}
			footer={
				<>
					Нет аккаунта?
					<Button asChild variant='link'>
						<Link to={ROUTES.REGISTER}>Зарегистрироваться</Link>
					</Button>
				</>
			}
		/>
	)
}

export const Component = LoginPage
