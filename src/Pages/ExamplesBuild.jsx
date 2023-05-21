import { useEffect, useState } from "react";
import Statements from "./Statements.js";
import { ExampleContainerImg } from "../Utils.jsx";
import { Link } from "react-router-dom";
import { ContactBar, NavigationBar } from "../Utils.jsx";

const App = function () {
  const [statements, setStatements] = useState([]);

  useEffect(() => {
    setStatements(Statements, statements);
  }, []);

  return (
    <>
      <NavigationBar />
      <nav className="examples-nav">
        <ul>
          <li>
            <Link to="/SatixXGG-portfolio-react/examples/UI">UI</Link>
          </li>
          <li>
            <Link to="/SatixXGG-portfolio-react/examples/Building">
              Building
            </Link>
          </li>
          <li>
            <Link to="/SatixXGG-portfolio-react/examples/Scripting">
              Scripting
            </Link>
          </li>
        </ul>
      </nav>

      <div className="examples-conainer">
        {statements.map((value, index) => {
          if (value[4] == "BU") {
            if (value[5] != null) {
              return ExampleContainerImg(
                value[0],
                value[3],
                value[1],
                value[2],
                value[5]
              );
            } else {
              return ExampleContainerImg(
                value[0],
                value[3],
                value[1],
                value[2]
              );
            }
          }
        })}
      </div>
      <ContactBar />
    </>
  );
};

export default App;
