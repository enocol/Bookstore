import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <header className="header">
      <nav className="navbar">
        <h1>Book Store</h1>
        <ul className="navlinks">
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/catergories">Catergories</Link>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

export default NavBar;
