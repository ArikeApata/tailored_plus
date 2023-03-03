import Featured from "./Featured";
import Recommend from "./Recommend";
import Footer from "./Footer"
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
const Home = ({ addToCart }) => {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-content">
          <h1>Begin you journey into Elegance</h1>
          <p>Step out in style...</p>
          <div className="">
            <Link to="/shop">
              Shop Now
              <span>
                <AiOutlineArrowRight />
              </span>
            </Link>
          </div>
        </div>
        <div className="banner-image">
          <img src="images/neww.png" alt="" />
        </div>
      </div>

      <div>
        <Featured addToCart={addToCart} />
      </div>
      <div>
        <Recommend addToCart={addToCart} />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
