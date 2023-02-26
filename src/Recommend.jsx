import ProductList from "./ProductList";
import useFetch from "./Fetch";
const Recommend = ({ addToCart }) => {
  const {
    data: products,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/products");

  return (
    <div className="featured-list">
      <div className="featured-heading">
        <h2>Recommended Product</h2>
        <a href="/shop">See All</a>
      </div>
      {isLoading && <div>Please wait...</div>}
      {products && (
        <ProductList addToCart={addToCart} products={products.slice(4, 10)} />
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Recommend;
