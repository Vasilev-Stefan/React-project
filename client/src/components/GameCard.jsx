

export function GameCard({game}) {
    return (
        <div className="game">
            <img src={game.imageUrl} alt={game.title} />
            <div className="details-overlay">
                <p className="name">{game.title}</p>
                <p className="genre">{game.genre}</p>
                <a href="#" className="details-button">Details</a>
            </div>
        </div>
    )
}