import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import Content from "./main/Content";
import Subscribe from "./subscribe/Subscribe";
import Footer from "./footer/Footer";
import Item from "./main/item/Item";
import Account from "./account/Account";
import "./common.css";
import "./null.css";
import Registration from "./registration/Registration";
import Cart from "./cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="common-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/accountSettings" element={<Account />} />
            <Route path="/books/:bookId" element={<Item />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
