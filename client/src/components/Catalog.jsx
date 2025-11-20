import { useEffect, useState } from 'react'
import { GameCard } from './GameCard'

export function Catalog() {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games?sortBy=_createdOn%20desc')
        .then(response => response.json())
        .then(result => setGames(Object.values(result)))
        .catch(error => alert(error))
    }, [])

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            <div className="catalog-container">

            {games.map((game) => <GameCard key={game.title} game={game}/>)}
                <div className="game">
                    <img src='/images/witcher.png' alt="The Witcher 3" />
                    <div className="details-overlay">
                        <p className="name">The Witcher 3</p>
                        <p className="genre">Open World</p>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>

                <div className="game">
                    <img src='/images/elden ring.png' alt="Elden Ring" />
                    <div className="details-overlay">
                        <p className="name">Elden Ring</p>
                        <p className="genre">Action RPG</p>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>

                <div className="game">
                    <img src='/images/minecraft.png' alt="Minecraft" />
                    <div className="details-overlay">
                        <p className="name">Minecraft</p>
                        <p className="genre">Sandbox</p>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>

                <div className="game">
                    <img src='/images/cyberpunk.png' alt="Cyberpunk 2077" />
                    <div className="details-overlay">
                        <p className="name">Cyberpunk 2077</p>
                        <p className="genre">Action RPG</p>
                        <a href="#" className="details-button">Details</a>
                    </div>
                </div>

            </div>
            {/* <!-- Display paragraph: If there is no games  --> */}
            {/* <!-- <h3 className="no-articles">No Added Games Yet</h3> --> */}
        </section>
    )
}