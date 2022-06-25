import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./Routes/Home/Home.component";
import Navigation from "./Routes/Navigation/Navigation.component";
import Authentication from "./Routes/authentication/authentication.component";
import Shop from "./Routes/shop/shop.component";
import Checkout from "./Routes/checkout/checkout.component";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />

      </Route>
    </Routes>
  );
};

export default App;