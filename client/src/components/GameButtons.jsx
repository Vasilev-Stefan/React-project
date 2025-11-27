import { Link, useParams } from "react-router";


export function GameButtons() {
    const { id } = useParams()
    return (
        <div className="buttons">
            <Link to={`/games/edit/${id}`} className="button">Edit</Link>
            <Link to={`/games/delete/${id}`} className="button">Delete</Link>
        </div>
    )
}