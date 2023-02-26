import { Link } from "react-router-dom";

const NavBar = ({ search, handleChange, handleSearch, setPage, cart }) => {
  return (
    <nav className="navbar">
      {/* <input type="checkbox" />
      <label className="chkbtn">
        <i className="fas fa-bars" aria-hidden="true"></i>
      </label> */}
      <div className="dropdown">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <img src="/images/logoo.png" alt="app-logo" className="logo" />
      <div className="main">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/shop"
              // onClick={() => {
              //   setPage(true);
              // }}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link to="/featured">Featured</Link>
          </li>
          <li>
            <Link to="/recommended">Recommended</Link>
          </li>
        </ul>
      </div>

      <div className="search">
        <span>
          <img src="/images/search-icon.png" alt="" />
        </span>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={handleChange}
          />
        </form>
      </div>

      <div id="right">
        <ul>
          <Link to="/cart">
            <span className="cart-icon">
              <i className="fas fa-cart-plus"></i>
              <span>{cart.length}</span>
            </span>
          </Link>
          <div className="rightbutt">
            <li>
              <Link to="/signup">
                <button className="sign-button">Sign Up</button>
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <button className="sign-button">Sign In</button>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
