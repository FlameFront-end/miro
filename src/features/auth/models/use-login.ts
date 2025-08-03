import { rqClient } from '@/shared/api/instance.ts'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '@/shared/model/routes.ts'
import { ApiSchemas } from '@/shared/api/schema'

export function useLogin() {
	const navigate = useNavigate()

	const loginMutation = rqClient.useMutation('post', '/auth/login', {
		onSuccess() {
			navigate(ROUTES.BOARDS)
		}
	})

	const login = (data: ApiSchemas['LoginRequest']) => {
		loginMutation.mutate({ body: data })
	}

	const errorMessage = loginMutation.isError
		? loginMutation.error.message
		: undefined

	return {
		login,
		isPending: loginMutation.isPending,
		errorMessage
	}
}
