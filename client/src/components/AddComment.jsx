import { useParams } from "react-router"

export function AddComment({
    refresh
}) {
    const { id } = useParams()

    

    const submitHandler = async (formData) => {
        const comment = formData.get('comment')
        const record = {
            "author": "No author yet",
            "gameId": id,
            "content": comment
        }

        try {
            await fetch(`http://localhost:3030/jsonstore/comments`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(record)
            })

            refresh()
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={submitHandler}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    )
}