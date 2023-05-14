
import Home from "./Pages/Home.jsx"
import Prices from "./Pages/Prices.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prices" element={<Prices />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
