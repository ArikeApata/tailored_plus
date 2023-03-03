import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const NavBar = ({ search, handleChange, handleSearch, cart }) => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => setToggleNav(!toggleNav);
  return (
    <>
      <header>
        <div className="logo-wrapper">
          <img src="/images/logoo.png" alt="app-logo" />
        </div>

        <nav className="nav-links desktop">
          <div></div>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/featured">Featured</Link>
          <Link to="/recommended">Recommended</Link>
        </nav>

        <div className="input-cart desktop">
          <form className="search-input" onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search product..."
              value={search}
              onChange={handleChange}
            />
          </form>
          <div>
            <Link to="/cart">
              <span className="cart-icon">
                <i className="fas fa-cart-plus"></i>
                <span>{cart.length}</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="btn-wrapper desktop">
          <Link to="/signup" className="signup-link">
            Sign Up
          </Link>
          <Link to="/signin" className="signin-link">
            Sign In
          </Link>
        </div>

        <div className="hamburger-icon" onClick={handleToggleNav}>
          <FaBars />
        </div>
      </header>
      {toggleNav && (
        <div className="mobile-items">
          <div className="input-cart mobile">
            <form className="search-input" onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="Search product..."
                value={search}
                onChange={handleChange}
              />
            </form>
            <div>
              <Link to="/cart">
                <span className="cart-icon">
                  <i className="fas fa-cart-plus"></i>
                  <span>{cart.length}</span>
                </span>
              </Link>
            </div>
          </div>
          <div className="nav-links mobile">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/featured">Featured</Link>
            <Link to="/recommended">Recommended</Link>
          </div>

          <div className="btn-wrapper mobile">
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
            <Link to="/signin" className="signin-link">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
