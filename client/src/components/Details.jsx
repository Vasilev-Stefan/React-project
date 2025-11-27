import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { GameButtons } from "./GameButtons"
import { CommentsSection } from "./CommentsSection"
import { AddComment } from "./AddComment"

export function Details() {
    const {id} = useParams()

    const [game, setGame] = useState({})
    const [forceRefresh, setForceRefresh] = useState(false)

    const refresh = () => {
        setForceRefresh(state => !state)
    }

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/games/${id}`)
        .then(response => response.json())
        .then(result => setGame(result))
        .catch(error => alert(error))
    }, [id])
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="header-and-image">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />

                    <div className="meta-info">
                        <h1 className="game-name">{game.title}</h1>

                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">{game.genre}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">{game.players}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">{game.date}</span>
                        </p>
                    </div>
                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">
                            {game.summary}
                        </p>
                    </div>
                </div>


                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <GameButtons />

                <CommentsSection refresh={refresh} />

            </div>
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <AddComment refresh={refresh}/>
        </section>
    )
}