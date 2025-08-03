import { ROUTES } from '@/shared/model/routes.ts'
import { createBrowserRouter, redirect } from 'react-router-dom'
import { App } from '../app.tsx'
import {
	protectedLoader,
	ProtectedRouter
} from '@/app/model/protected-router.tsx'
import { AuthRouter } from '@/app/model/auth-router.tsx'
import { AppHeader } from '@/features/header'

export const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: ROUTES.HOME,
				loader: () => redirect(ROUTES.BOARDS)
			},
			{
				element: <AuthRouter />,
				children: [
					{
						path: ROUTES.LOGIN,
						lazy: () => import('@/features/auth/login.page.tsx')
					},
					{
						path: ROUTES.REGISTER,
						lazy: () => import('@/features/auth/register.page.tsx')
					}
				]
			},
			{
				element: (
					<>
						<AppHeader />
						<ProtectedRouter />
					</>
				),
				loader: protectedLoader,
				children: [
					{
						path: ROUTES.BOARDS,
						lazy: () =>
							import(
								'@/features/boards-list/boards-list.page.tsx'
							)
					},
					{
						path: ROUTES.BOARD,
						lazy: () => import('@/features/board/board.page.tsx')
					}
				]
			}
		]
	}
])
