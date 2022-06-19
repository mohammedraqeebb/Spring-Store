import React from "react";
import Home from "./Routes/Home/Home.component";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./Routes/Navigation/Navigation.component";
import Authentication from "./Routes/authentication/authentication.component";

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;