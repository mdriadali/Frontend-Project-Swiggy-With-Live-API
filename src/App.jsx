import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Menu from "./pages/Menu";
import MenuSearch from "./components/MenuSearch";
import Layout from "./pages/Layout";
import { Provider } from "react-redux";
import { store } from "./context/store";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Layout />}>
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/city/delhi/:id" element={<Menu />} />
            <Route path="/city/delhi/:id/search" element={<MenuSearch />} />
          </Route>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
