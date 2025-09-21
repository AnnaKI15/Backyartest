import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Design from "./pages/Design";
import Yard from "./pages/Yard";
function App() {
  return (
    <div>
      <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/design" element={<Design />} />
        <Route path="/yard" element={<Yard />} />
      </Routes>    
    </div>
  );
}

export default App;
