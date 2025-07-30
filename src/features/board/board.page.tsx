import { useParams } from 'react-router-dom'
import { RouteParams } from '@/shared/model/routes.ts'

export const BoardPage = () => {
	const params = useParams<RouteParams['BOARD']>()

	return <div>Board page {params.boardId}</div>
}

export const Component = BoardPage
