import { useEffect, useState } from "react"
import { GameCard } from "./GameCard"


export function Home() {
    const [lastGames, setLastGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/games?sortBy=_createdOn%20desc')
        .then(response => response.json())
        .then(result => setLastGames(Object.entries(result).slice(0, 3)))
        .catch(error => alert(error.message))
    },[])
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
                        {lastGames.length > 0 ? <div className="home-container">{lastGames.map((set) => <GameCard key={set[1].title} id={set[0]} game={set[1]}/>)}</div> :
                        <p className="no-articles">No games yet</p>
                        }
                </div>
            </div>

        </section>
    )
}