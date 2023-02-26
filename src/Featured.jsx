import useFetch from "./Fetch";
import ProductList from "./ProductList";
const Featured = ({ addToCart }) => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/products");

  return (
    <div className="featured-list">
      <div className="featured-heading">
        <h2>Featured Product</h2>
        <a href="/shop">See All</a>
      </div>
      {isLoading && <div>Please wait...</div>}
      {products && (
        <ProductList addToCart={addToCart} products={products.slice(0, 6)} />
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Featured;
