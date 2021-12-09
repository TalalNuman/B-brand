import "./App.css";
import Patti from "./components/Patti";
import Home from "./view/Home";
import Category from "./view/Category";
import Collections from "./view/Collections";
import Contact from "./view/Contact";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App ">
      <Patti />
      <Router>
      <Navbar/>
        <Routes>
          <Route path="category" element={<Category />} />
          <Route path="collections" element={<Collections />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
