import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetail from "./Pages/PageProductDetail/ProductDetail";
import Home from "./Pages/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import LayoutPage from "./Components/Layout/Layout";
import Cart from "./Pages/Cart/Cart";
import CheckoutThank from "./Components/Checkout/CheckoutThank";
import Category from "./Components/Category/Category";
import Blog from "./Pages/Blogs/Blog";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route path="/" element={<Home />} />
          <Route path="product/:slug" element={<ProductDetail />} />
          <Route path="checkout/" element={<Checkout />} />
          <Route path="checkout/thank/" element={<CheckoutThank></CheckoutThank>} />
          <Route path="collections/:name" element={<Category></Category>} />
          <Route path="cart/" element={<Cart />} />
        </Route>
        <Route path="/blogs/:slug" element={<Blog/>}/>
      </Routes>
    </div>
  );
}

export default App;
