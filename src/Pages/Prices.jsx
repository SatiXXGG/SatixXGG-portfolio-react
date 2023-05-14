
import { PriceContainer} from "../Utils"

const App = function(params) {
    return <>
    <ul  className = "prices-list" style={{listStyle: "none"}}>
        <li>{PriceContainer(
            "Basic", "I will make basic systems like a Raycast gun, Common items shop, leaderstats with save, some IK", ["Source Code", "Customizable system", "One check", "Progress videos"]
            )}</li>
        <li>{PriceContainer(
            "Pro", "I will make medium complex systems like a Raycast gun with particles and bullet drop, Saving Shops and Daily rewards", ["Source Code", "Customizable system", "One check", "Progress videos", "1 UI Designed by me"], "15 - 25 USD"
            )}</li>
        <li>{PriceContainer(
            "Pro +", "I will make complex systems like ViewportFrames advanced UI, custom hotbars, user effects xp and levels", ["Source Code", "Customizable system", "Two check", "Progress videos"], "25 - 100 USD"
            )}</li>
    </ul>
    </>
}

export default App