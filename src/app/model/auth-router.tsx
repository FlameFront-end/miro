import { useSession } from '@/shared/model/session.ts'
import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '@/shared/model/routes.ts'

export const AuthRouter = () => {
	const { session } = useSession()

	if (session) {
		return <Navigate to={ROUTES.BOARDS} />
	}

	return <Outlet />
}
