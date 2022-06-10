import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./null.css"
import Account from "./account/Account";
import Content from "./main/Content";
import Item from "./main/item/Item";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/account" element={<Account />} />
        <Route path=":bookId" element={<Item />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
