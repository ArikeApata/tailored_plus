import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Featured from "./Featured";
import useFetch from "./Fetch";
import Home from "./Home";
import NavBar from "./Navbar";
import Recommend from "./Recommend";
import Shop from "./Shop";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";

import "./mil.css";
import "react-toastify/dist/ReactToastify.css";

function App(props) {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const checkProduct = cart.filter((item) => item.id === product.id);
    if (checkProduct.length) {
      toast.error("you already added this item!");
      return;
    } else {
      toast.success("item was added to cart!");
      setCart((prevState) => [...prevState, product]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((product) => product.id !== id);

    setCart(newCart);
  };

  const handleChange = (e) => setSearch(e.target.value);

  const {
    data: products,
    defaultProducts,
    setData,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/products");

  let history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push("/shop");
    if (search === "") {
      setData(defaultProducts);
    } else {
      const filteredData = defaultProducts.filter((f) => {
        if (f.title.toLowerCase().includes(search.toLowerCase())) {
          return f;
        }
      });

      setData(filteredData);
    }
  };

  return (
    <div className="App">
      <NavBar
        search={search}
        handleChange={handleChange}
        handleSearch={handleSearch}
        products={products}
        cart={cart}
      />

      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Home addToCart={addToCart} />
          </Route>
          <Route path="/featured">
            <Featured addToCart={addToCart} />
          </Route>
          <Route path="/recommended">
            <Recommend addToCart={addToCart} />
          </Route>
          <Route path="/shop">
            <Shop
              products={products}
              isLoading={isLoading}
              error={error}
              addToCart={addToCart}
            />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/cart">
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </Route>
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
