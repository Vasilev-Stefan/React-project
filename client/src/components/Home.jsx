import { GameCard } from "./GameCard"
import { useFetch } from "../hooks/useFetch"


export function Home() {
    const {data: games} = useFetch('data/games?sortBy=_createdOn%20desc&pageSize=3')
    return (
            // <!--Home Page-->
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in </h3>
                <img id="logo-left" src='/images/logo.png' alt="logo" />
            </div>

            <div id="home-page">
                <h1>Latest Games</h1>
                <div id="latest-wrap">
                        {games?.length > 0 ? <div className="home-container">{games.map((game) => <GameCard key={game._id} id={game._id} game={game}/>)}</div> :
                        <p className="no-articles">No games yet</p>
                        }
                </div>
            </div>

        </section>
    )
}