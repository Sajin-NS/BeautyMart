import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Cart } from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/cart" Component={Cart}></Route>
          <Route path="/wishlist" Component={Wishlist}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
