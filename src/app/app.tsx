import { Outlet, useLocation } from 'react-router-dom'
import { AppHeader } from '@/features/header'
import { ROUTES } from '@/shared/model/routes'
import { Providers } from '@/app/providers.tsx'

export const App = () => {
	const location = useLocation()

	const isAuthPage =
		location.pathname === ROUTES.LOGIN ||
		location.pathname === ROUTES.REGISTER

	return (
		<Providers>
			<div className='min-h-screen flex flex-col'>
				{!isAuthPage && <AppHeader />}
				<Outlet />
			</div>
		</Providers>
	)
}
