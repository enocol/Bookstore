import { Link } from 'react-router-dom';

const NavBar = () => (
  <>
    <header className="header">
      <nav className="navbar">
        <h1>Bookstore CMS</h1>
        <ul className="navlinks">
          <li className="link-b">
            <Link to="/">BOOKS</Link>
          </li>
          <li>
            <Link to="/catergories" className="link-c">
              CATEGORIES
            </Link>
          </li>
        </ul>
      </nav>
      <div className="profile">
        <i className="fa-sharp fa-solid fa-user fa-sm" />
      </div>
    </header>
  </>
);

export default NavBar;
