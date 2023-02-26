import ProductList from "./ProductList";
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
    </div>
  );
};

export default Shop;
