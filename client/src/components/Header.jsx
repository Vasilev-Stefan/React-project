import { Link } from "react-router";
import { useUser } from "../hooks/useUser";

export function Header() {
  const { user } = useUser();
  return (
    <header>
      {/* <!-- Navigation --> */}
      <nav>
        <Link className="home" to="/">
          {" "}
          <img src="/images/logo.png" alt="logo" />{" "}
        </Link>
        <Link to="/catalog">Catalog</Link>
        {/* <!-- Logged-in users --> */}
        {user ? 
        <div id="user">
          <Link to="/games/add">Add Game</Link>
          <Link to="/users/logout">Logout</Link>
        </div>
        :
        <div id="guest">
          <Link to="/users/login">Login</Link>
          <Link to="/users/register">Register</Link>
        </div>
        }
      </nav>
    </header>
  );
}
