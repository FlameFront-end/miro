import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/app/model/router.tsx'

import './index.css'
import { enableMocking } from '@/shared/api/mocks'

enableMocking().then(() => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<RouterProvider router={router} />{' '}
		</StrictMode>
	)
})
