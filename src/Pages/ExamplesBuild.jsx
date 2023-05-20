
import {useEffect, useState} from "react"
import Statements from "./Statements.js"
import { ExampleContainerImg, ExampleContainerVid } from "../Utils.jsx"

const App = function() {

    const [statements, setStatements] = useState([])

    useEffect(() => {
        setStatements(Statements, statements)
    }, [])

    return (
        <>
            <nav className="examples-nav">
                <ul>
                <li>
                        <a href="/SatixXGG-portfolio-react/examples/UI">UI</a>
                    </li>
                    <li>
                        <a href="/SatixXGG-portfolio-react/examples/Building">Building</a>
                    </li>
                    <li>
                        <a href="/SatixXGG-portfolio-react/examples/Scripting">Scripting</a>
                    </li>
                </ul>
            </nav>

            <div className="examples-conainer">
                {statements.map((value, index) => {
                    if (value[4] == "BU") {
                        if (value[5] != null) {
                            return (ExampleContainerImg(value[0], value[3], value[1], value[2], value[5]))
                        } else {
                            return (ExampleContainerImg(value[0], value[3], value[1], value[2]))
                        }
                    }
                })
                }
            </div>
        </>
    )
}

export default App