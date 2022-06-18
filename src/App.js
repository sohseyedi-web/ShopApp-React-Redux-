import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Cart from "./components/Cart/Cart";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
