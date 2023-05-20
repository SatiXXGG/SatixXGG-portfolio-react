
import Home from "./Pages/Home.jsx"
import Prices from "./Pages/Prices.jsx"
import ExamplesUI from "./Pages/ExamplesUI.jsx"
import ExamplesBuild from "./Pages/ExamplesBuild.jsx"
import ScriptingExample from "./Pages/ExamplesScripting.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/SatixXGG-portfolio-react" element={<Home />} />
      <Route path="/SatixXGG-portfolio-react/prices" element={<Prices />} />
      <Route path="/SatixXGG-portfolio-react/examples/UI" element={<ExamplesUI />} />
      <Route path="/SatixXGG-portfolio-react/examples/Building" element={<ExamplesBuild />} />
      <Route path="/SatixXGG-portfolio-react/examples/Scripting" element={<ScriptingExample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
