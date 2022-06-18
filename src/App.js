import React from "react";
import Home from "./Routes/Home/Home.component";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./Routes/Navigation/Navigation.component";
import Signin from "./components/sign-in";

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;