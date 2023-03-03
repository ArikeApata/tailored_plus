import ProductList from "./ProductList";
import Footer from "./Footer";
const Shop = ({ products, isLoading, error, addToCart }) => {
  return (
    <div className="featured-list">
      <div className="featured-heading">
        <h2>Shop Now...</h2>
        <a href="/shop">See All</a>
      </div>
      {isLoading && <div>Please wait...</div>}
      {products && <ProductList addToCart={addToCart} products={products} />}
      {error && <div>{error}</div>}
      <Footer />
    </div>
  );
};

export default Shop;
