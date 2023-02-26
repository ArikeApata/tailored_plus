import Featured from "./Featured";
import Recommend from "./Recommend";

const Home = ({ addToCart }) => {
  return (
    <div className="home">
      <div className="banner">
        <div className="banner-content">
          <h1>Begin you journey into Elegance</h1>
          <p>Step out in style...</p>
          <button href="/shop">Shop Now</button>
        </div>
        <div className="banner-image">
          <img
            src="images/neww.png"
            alt=""
            style={{
              height: "324px",
              width: "600px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div>
        <Featured addToCart={addToCart} />
      </div>
      <div>
        <Recommend addToCart={addToCart} />
      </div>
    </div>
  );
};

export default Home;