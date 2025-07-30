import { ROUTES } from '@/shared/model/routes'
import { Link, generatePath } from 'react-router-dom'
import { rqClient } from '@/shared/api/instance.ts'

const BoardsListPage = () => {
	const boardsQuery = rqClient.useQuery('get', '/boards')

	return (
		<div>
			<h1>Boards list</h1>

			{boardsQuery.data?.map(board => (
				<Link
					to={generatePath(ROUTES.BOARD, { boardId: board.id })}
					key={board.id}
				>
					{board.name}
				</Link>
			))}
		</div>
	)
}

export const Component = BoardsListPage
