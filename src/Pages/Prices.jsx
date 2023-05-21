import { PriceContainer } from "../Utils.jsx";
import { ContactBar , NavigationBar } from "../Utils.jsx";

const App = function (params) {
  return (
    <>
      <NavigationBar />
      <ul className="prices-list" style={{ listStyle: "none" }}>
        <li>
          {PriceContainer(
            "Basic",
            "I will make basic systems like a Raycast gun, Common items shop, leaderstats with save, some IK",
            [
              "Source Code",
              "Customizable system",
              "One check",
              "Progress videos",
            ],
            "05 - 15 USD"
          )}
        </li>
        <li>
          {PriceContainer(
            "Pro",
            "I will make medium complex systems like a Raycast gun with particles and bullet drop, Saving Shops and Daily rewards",
            [
              "Source Code",
              "Customizable system",
              "One check",
              "Progress videos",
              "1 UI Designed by me",
            ],
            "15 - 25 USD"
          )}
        </li>
        <li>
          {PriceContainer(
            "Pro +",
            "I will make complex systems like ViewportFrames advanced UI, custom hotbars, user effects xp and levels",
            [
              "Source Code",
              "Customizable system",
              "Two check",
              "Progress videos",
              "2 UI Designed by me",
              "Second level (If basic)",
            ],
            "25 - 100 USD"
          )}
        </li>
      </ul>
      <h2
        style={{
          position: "absolute",
          left: "30rem",
          top: "1px",
          color: "red",
        }}
      >
        This prices are just examples and are subject to change
      </h2>
      <ContactBar />
    </>
  );
};

export default App;
