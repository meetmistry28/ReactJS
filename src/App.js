import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./user/headers/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./user/containers/home/Home";
import Products from "./user/containers/Prosucts_list/Products";
import Contact from "./user/containers/contact/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes >
        <Route exact path="/" element={<Home /> }></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
