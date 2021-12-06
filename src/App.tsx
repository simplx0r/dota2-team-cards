import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorElement from "./components/Error/";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import storeProvided from "./providerhoc";
import "./reset.scss";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<ErrorElement />} />
      </Routes>
    </BrowserRouter>
  );
}
export default storeProvided(App);
