import { useParams } from "react-router"
import { GameButtons } from "./GameButtons"
import { CommentsSection } from "./CommentsSection"
import { AddComment } from "./AddComment"
import { useFetch } from "../hooks/useFetch"
import { useUser } from "../hooks/useUser"
import { useState } from "react"

export function Details() {
    const {id: gameId} = useParams()
    const { data: game } = useFetch(`data/games/${gameId}`)
    const { user, isAuthenticated } = useUser()
    let isOwner = false

    const [refreshKey, setRefreshKey] = useState(0)

    function refreshComments() {
    setRefreshKey(prev => prev + 1)
  }

    if(user && game){
        isOwner = game._ownerId === user._id
    }
    console.log('Game owner: ' + game?._ownerId)
    console.log('Current user: ' + user?._id)
    console.log(isAuthenticated)


    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="header-and-image">
                    <img className="game-img" src={game?.imageUrl} alt={game?.title} />

                    <div className="meta-info">
                        <h1 className="game-name">{game?.title}</h1>

                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">{game?.genre}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">{game?.players}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">{game?.date}</span>
                        </p>
                    </div>
                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">
                            {game?.summary}
                        </p>
                    </div>
                </div>


                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {isOwner && <GameButtons />}

                <CommentsSection refreshKey={refreshKey} />

            </div>
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            {isAuthenticated && !isOwner && <AddComment refresh={refreshComments} />}
        </section>
    )
}