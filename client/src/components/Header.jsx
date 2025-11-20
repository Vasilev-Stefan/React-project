import logoImage from '../assets/logo.png'
import { Link } from 'react-router'

export function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <nav>
                <Link className="home" to="/"> <img src={logoImage} alt="logo" /> </Link>
                <Link to="/catalog">Catalog</Link>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <Link to="/games/add">Add Game</Link>
                    <Link to="/users/logout">Logout</Link>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <Link to="/users/login">Login</Link>
                    <Link to="/users/register">Register</Link>
                </div>
            </nav>
        </header>
    )
}