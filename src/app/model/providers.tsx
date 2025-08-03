import { ReactNode } from 'react'
import { queryClient } from '@/shared/api/query-client.ts'
import { QueryClientProvider } from '@tanstack/react-query'

export const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	)
}
