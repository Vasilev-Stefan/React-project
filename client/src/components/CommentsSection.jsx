import { useParams } from "react-router"
import { useFetch } from "../hooks/useFetch"

export function CommentsSection({refreshKey}) {
    const { id: gameId } = useParams()
    const {data: comments} = useFetch(`data/comments?where=gameId%3D%22${gameId}%22`, [refreshKey])

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            {comments?.length > 0 ?
            <ul>
                {comments.map(comment => <li className="comment" key={comment._id}><p>Content: {comment.comment}</p></li>)}
            </ul> 
            :
            <p className="no-comment">No comments.</p>
            }
        </div>
    )
}