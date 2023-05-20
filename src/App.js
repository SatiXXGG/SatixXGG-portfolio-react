
import Home from "./Pages/Home.jsx"
import Prices from "./Pages/Prices.jsx"
import ExamplesUI from "./Pages/ExamplesUI.jsx"
import ExamplesBuild from "./Pages/ExamplesBuild.jsx"
import ScriptingExample from "./Pages/ExamplesScripting.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter basename="/SatixXGG-portfolio-react">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/examples/UI" element={<ExamplesUI />} />
        <Route path="/examples/Building" element={<ExamplesBuild />} />
        <Route path="/examples/Scripting" element={<ScriptingExample />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
