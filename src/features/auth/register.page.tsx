import { AuthLayout } from '@/features/auth/ui/auth-layout.tsx'
import { Button } from '@/shared/ui/kit/button.tsx'
import { Link } from 'react-router-dom'
import { ROUTES } from '@/shared/model/routes.ts'
import { RegisterForm } from '@/features/auth/ui/register-form.tsx'

export const RegisterPage = () => {
	return (
		<AuthLayout
			title='Регистрации'
			form={<RegisterForm />}
			footer={
				<>
					Уже есть аккаунт?
					<Button asChild variant='link'>
						<Link to={ROUTES.LOGIN}>Войти</Link>
					</Button>
				</>
			}
		/>
	)
}

export const Component = RegisterPage
