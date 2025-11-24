import { useState } from "react"
import { useNavigate } from "react-router"

const intialData = {
    title: '',
    genre: '',
    players: '',
    date: '',
    imageUrl: '',
    summary: '',

}

export function Create() {
    const [data, setData] = useState(intialData)
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData(state => ({
            ...state,
            [name]: value
        }))

        console.log('Key:' + name)
        console.log('Value:' + value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newErrors = {}

        if(!data.title){
            newErrors.title = 'Title is required!'
        }

        if(data.players === 0 || Number(data.players) < 0){
            newErrors.players = 'Players are required!'
        }

        if(!data.genre){
            newErrors.genre = 'Genre is required!'
        }

        if(!data.imageUrl){
            newErrors.imageUrl = 'Image is required!'
        }

        if(!data.date){
            newErrors.date = 'Date is required!'
        }

        if(!data.summary){
            newErrors.summary = 'Summary is required!'
        }

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors)
            return
        }

        setErrors({})
        const gameData = {...data}
        gameData._ownerId = 'No owner yet'
        gameData._createdOn = Date.now()
        gameData.players = Number(gameData.players)

        fetch('http://localhost:3030/jsonstore/games', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(gameData)
        })
        .then(() => navigate('/'))
        .catch(error => alert(error.message))
    }

    return (
        <section id="add-page">
            <form id="add-new-game" onSubmit={onSubmitHandler}>
                <div className="container">

                    <h1>Add New Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input type="text" id="gameName" value={data.title} name="title" onChange={onChangeHandler} placeholder="Enter game title..."/>
                        {errors.title && <p>{errors.title}</p>}
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input type="text" id="genre" name="genre" value={data.genre} onChange={onChangeHandler} placeholder="Enter game genre..."/>
                        {errors.genre && <p>{errors.genre}</p>}
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input type="number" id="activePlayers" value={data.players} onChange={onChangeHandler} name="players" min="0" placeholder="0"/>
                        {errors.players && <p>{errors.players}</p>}
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input type="date" id="releaseDate" value={data.date} onChange={onChangeHandler} name="date"/>
                        {errors.date && <p>{errors.date}</p>}
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input type="text" id="imageUrl" value={data.imageUrl} onChange={onChangeHandler} name="imageUrl" placeholder="Enter image URL..."/>
                        {errors.imageUrl && <p>{errors.imageUrl}</p>}
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea name="summary" id="summary" value={data.summary} onChange={onChangeHandler} rows="5" placeholder="Write a brief summary..."></textarea>
                        {errors.summary && <p>{errors.summary}</p>}
                    </div>

                    <input className="btn submit" type="submit" value="ADD GAME"/>
                </div>
            </form>
        </section>
    )
}