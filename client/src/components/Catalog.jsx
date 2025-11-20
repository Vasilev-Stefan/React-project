import { useEffect, useState } from 'react'
import { GameCard } from './GameCard'

export function Catalog() {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games?sortBy=_createdOn%20desc')
        .then(response => response.json())
        .then(result => setGames(Object.entries(result)))
        .catch(error => alert(error))
    }, [])

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>

            {games.length > 0 ?
            <div className="catalog-container">
            {games.map((set) => <GameCard key={set[1].title} id={set[0]} game={set[1]}/>)}
            </div>
            :
            <h3 className="no-articles">No Added Games Yet</h3>
            }
        </section>
    )
}