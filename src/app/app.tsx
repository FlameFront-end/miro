import { Outlet } from 'react-router-dom'
import { Providers } from '@/app/model/providers.tsx'

export const App = () => {
	return (
		<Providers>
			<div className='min-h-screen flex flex-col'>
				<Outlet />
			</div>
		</Providers>
	)
}
