import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Cart from "./pages/cart";
import SignIn from "./pages/security";
import Order from "./pages/order";
import OrderDetail from "./pages/order/detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/order" element={<Order />} />
        <Route path="/order-detail" element={<OrderDetail />} />
      </Routes>
    </Router>
  );
}

export default App
