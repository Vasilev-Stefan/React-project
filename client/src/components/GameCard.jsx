import { Link } from "react-router";


export function GameCard({id, game}) {
    return (
        <div className="game">
            <img src={game.imageUrl} alt={game.title} />
            <div className="details-overlay">
                <p className="name">{game.title}</p>
                <p className="genre">{game.genre}</p>
                <Link to={`/games/details/${id}`} className="details-button">Details</Link>
            </div>
        </div>
    )
}