import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const oldNavbar = ({ search, handleChange, handleSearch, cart }) => {
  const [page, setPage] = useState(false);
  return (
    <nav className="navbar">
      <div className="container">
        <img src="/images/logoo.png" alt="app-logo" className="logo" />
        <div className="main">
          <ul
            className={page ? "navbar-ul-page" : "navbar-ul"}
            onClick={() => setPage(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/featured">Featured</Link>
            </li>
            <li>
              <Link to="/recommended">Recommended</Link>
            </li>
            <li className="search">
              <span>
                <img src="/images/search-icon.png" alt="" />
              </span>
              <form className="search-input" onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search product..."
                  value={search}
                  onChange={handleChange}
                />
              </form>
            </li>
            <li>
              <Link to="/cart">
                <span className="cart-icon">
                  <i className="fas fa-cart-plus"></i>
                  <span>{cart.length}</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/signup" className="sign-button">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/signin" className="sign-button">
                Sign In
              </Link>
            </li>
            {/* <li>
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

      
        
          <li>
            <Link to="/cart">
            <span className="cart-icon">
              <i className="fas fa-cart-plus"></i>
              <span>{cart.length}</span>
            </span>
          </Link></li>
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
          </div> */}
          </ul>
        </div>
        <button className="fabars" onClick={() => setPage(!page)}>
          {page ? <ImCross /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default oldNavbar;
