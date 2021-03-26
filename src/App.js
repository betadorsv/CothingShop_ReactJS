import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Collections from "./components/Collections/Collections";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Banner></Banner>

      <Collections></Collections>
      <Products></Products>
    </Router>
  );
}

export default App;
