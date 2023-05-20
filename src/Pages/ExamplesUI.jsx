
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
                        <a href="/Examples/UI">UI</a>
                    </li>
                    <li>
                        <a href="/Examples/Building">Building</a>
                    </li>
                    <li>
                        <a href="/Examples/Scripting">Scripting</a>
                    </li>
                </ul>
            </nav>

            <div className="examples-conainer">
                {statements.map((value, index) => {
                    if (value[4] == "UI") {
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