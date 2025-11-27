import { useEffect, useState } from "react"
import { useParams } from "react-router"

export function CommentsSection() {
    const { id } = useParams()

    const [comments, setComments] = useState([])

    useEffect(() => {
        let allComments = {}
        fetch(`http://localhost:3030/jsonstore/comments`)
        .then(response => response.json())
        .then(result => setComments(Object.values(result).filter(c => c.gameId === id)))
        .catch(error => alert(error.message))

    }, [setComments])

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            {comments.length > 0 ?
            <ul>
                {comments.map(c => <li className="comment" key={c._id}><p>Content: {c.content}</p></li>)}
            </ul> 
            :
            <p className="no-comment">No comments.</p>
            }
        </div>
    )
}