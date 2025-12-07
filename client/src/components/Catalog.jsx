import { GameCard } from './GameCard'
import { useFetch } from '../hooks/useFetch'

export function Catalog() {
    const {data: games} = useFetch('data/games?sortBy=_createdOn%20desc')
    console.log(games)

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>

            {games?.length > 0 ?
            <div className="catalog-container">
            {games.map((game) => <GameCard key={game._id} id={game._id} game={game}/>)}
            </div>
            :
            <h3 className="no-articles">No Added Games Yet</h3>
            }
        </section>
    )
}