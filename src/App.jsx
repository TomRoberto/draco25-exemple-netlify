import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Details from "./pages/Details";
import Offer from "./pages/Offer";

// Components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/offer/:id" element={<Offer />} />
        {/* <Route path="*"  /> */}
      </Routes>
      <footer>Je suis le footer</footer>
    </Router>
  );
}

export default App;
