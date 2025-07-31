import { ROUTES } from '@/shared/model/routes'
import { Link, generatePath } from 'react-router-dom'
import { rqClient } from '@/shared/api/instance.ts'
import { FormEvent } from 'react'
import { useQueryClient } from '@tanstack/react-query'

const BoardsListPage = () => {
	const queryClient = useQueryClient()

	const boardsQuery = rqClient.useQuery('get', '/boards')
	const createBoardMutation = rqClient.useMutation('post', '/boards', {
		onSettled: async () => {
			await queryClient.invalidateQueries(
				rqClient.queryOptions('get', '/boards')
			)
		}
	})
	const deleteBoardMutation = rqClient.useMutation(
		'delete',
		`/boards/{boardId}`,
		{
			onSettled: async () => {
				await queryClient.invalidateQueries(
					rqClient.queryOptions('get', '/boards')
				)
			}
		}
	)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.target as HTMLFormElement)

		createBoardMutation.mutate({
			body: { name: formData.get('name') as string }
		})
	}

	return (
		<div>
			<h1>Boards list</h1>

			<form onSubmit={handleSubmit}>
				<input type='text' name='name' />

				<button disabled={createBoardMutation.isPending} type='submit'>
					Create board
				</button>
			</form>

			{boardsQuery.data?.map(board => (
				<div key={board.id}>
					<Link
						to={generatePath(ROUTES.BOARD, { boardId: board.id })}
					>
						{board.name}
					</Link>

					<button
						disabled={deleteBoardMutation.isPending}
						onClick={() =>
							deleteBoardMutation.mutate({
								params: { path: { boardId: board.id } }
							})
						}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	)
}

export const Component = BoardsListPage
