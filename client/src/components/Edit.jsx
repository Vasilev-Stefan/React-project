import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

const initalData = {
    title: '',
    genre: '',
    players: '',
    date: '',
    summary: '',
}

export function Edit() {
    const { id } = useParams()
    const [values, setValues] = useState(initalData)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/games/${id}`)
            .then(response => response.json())
            .then(result => setValues(result))
            .catch(error => alert(error.message))
    }, [])


    const onChangeHandler = (e) => {
        const key = e.target.name
        const value = e.target.value

        setValues(state => ({
            ...state,
            [key]: value
        }))
    }

    const submitHandler = async () => {
        const record = { ...values }
        try {
            await fetch(`http://localhost:3030/jsonstore/games/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(record)
            })

            navigate(`/games/details/${id}`)
        } catch (error) {
            alert(error.message)
        }
        

}

return (
    // <!-- add Page ( Only for logged-in users ) -->
    <section id="edit-page">
        <form id="add-new-game" action={submitHandler}>
            <div className="container">

                <h1>Edit Game</h1>

                <div className="form-group-half">
                    <label htmlFor="gameName">Game Name:</label>
                    <input
                        type="text"
                        id="gameName"
                        name="title"
                        onChange={onChangeHandler}
                        value={values.title}
                        placeholder="Enter game title..." />
                </div>

                <div className="form-group-half">
                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        value={values.genre}
                        name="genre"
                        onChange={onChangeHandler}
                        placeholder="Enter game genre..." />
                </div>

                <div className="form-group-half">
                    <label htmlFor="activePlayers">Active Players:</label>
                    <input
                        type="number"
                        id="activePlayers"
                        name="players"
                        value={values.players}
                        onChange={onChangeHandler}
                        min="0"
                        placeholder="0" />
                </div>

                <div className="form-group-half">
                    <label htmlFor="releaseDate">Release Date:</label>
                    <input
                        type="date"
                        value={values.date}
                        id="date"
                        onChange={onChangeHandler}
                        name="releaseDate" />
                </div>

                <div className="form-group-full">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        value={values.imageUrl}
                        id="imageUrl"
                        onChange={onChangeHandler}
                        name="imageUrl"
                        placeholder="Enter image URL..." />
                </div>

                <div className="form-group-full">
                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        value={values.summary}
                        id="summary"
                        onChange={onChangeHandler}
                        rows="5"
                        placeholder="Write a brief summary..."></textarea>
                </div>

                <input className="btn submit" type="submit" value="EDIT GAME" />
            </div>
        </form>
    </section>
)
}