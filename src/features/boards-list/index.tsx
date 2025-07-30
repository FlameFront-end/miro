import { Link, generatePath } from 'react-router-dom'
import { ROUTES } from '@/shared/model/routes.ts'

export const BoardsListPage = () => {
	return (
		<div>
			Boards list
			<Link to={generatePath(ROUTES.BOARD, { boardId: '1' })}>Board</Link>
		</div>
	)
}
