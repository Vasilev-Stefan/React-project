import logoImage from '../assets/logo.png'

export function Header() {
    return (
        <header>
            {/* <!-- Navigation --> */}
            <nav>
                <a className="home" href="#"> <img src={logoImage} alt="logo" /> </a>
                <a href="#">Catalog</a>
                {/* <!-- Logged-in users --> */}
                <div id="user">
                    <a href="#">Add Game</a>
                    <a href="#">Logout</a>
                </div>
                {/* <!-- Guest users --> */}
                <div id="guest">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                </div>
            </nav>
        </header>
    )
}