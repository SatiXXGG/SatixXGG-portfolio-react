//images
import RobloxLogo from "./Pages/Media/roblox.png";
import Fiverr from "./Pages/Media/fiverr.png";
import Github from "./Pages/Media/github.png";
import Checkmark from "./Pages/PagesMedia/Checkmark.png";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function ReturnMedia(type = "any", source = "any") {
  if (type == "vid") {
    return (
      <div>
        <ReactPlayer
          url={source}
          width="600px"
          height="350px"
          volume=".2"
          controls
          playsinline
          style={{ top: "-3rem", position: "relative" }}
        />
      </div>
    );
  } else {
    return <img src={source}></img>;
  }
}

export function NavigationBar() {
  return (
    <div className="nav-bar">
      <nav>
        <h1>
          <Link to="/SatixXGG-portfolio-react/">SatixXGG</Link>
        </h1>
        <ul>
          <li>
            <Link to="/SatixXGG-portfolio-react/prices">Prices</Link>
          </li>
          <li>
            <Link to="/SatixXGG-portfolio-react/examples/UI">Examples</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export function ContactBar() {
  return (
    <div className="contact-bar">
      <ul>
        <li>
          <a href="https://github.com/SatiXXGG" target="_blank">
            <img src={Github}></img>
          </a>
        </li>

        <li>
          <a
            href="https://www.roblox.com/users/409509982/profile"
            target="_blank"
          >
            <img src={RobloxLogo}></img>
          </a>
        </li>

        <li>
          <a
            href="https://es.fiverr.com/satixx?up_rollout=true"
            target="_blank"
          >
            <img src={Fiverr}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}

export function PriceContainer(
  PlanName = "Basic",
  Info = "No info provided",
  Include = ["Source Code", "js"],
  Price = "5 - 15 USD"
) {
  return (
    <div className="prices glass">
      <h1>{PlanName}</h1>
      <p className="prices-description">{Info}</p>
      <h3>Includes</h3>
      <ul>
        {Include.map((value, index) => {
          return (
            <li>
              <img src={Checkmark} /> <a>{value}</a>
            </li>
          );
        })}
      </ul>
      <h2>{Price}</h2>
    </div>
  );
}

export function ExampleContainerImg(
  Title = "Example",
  Date = "??/??/??",
  Description = "No info..",
  Source = "",
  Type = "img"
) {
  return (
    <div className="example-container glass">
      <h1>{Title}</h1>
      <h3>{Date}</h3>
      <p>{Description}</p>
      <div className="example-image-conainer">{ReturnMedia(Type, Source)}</div>
    </div>
  );
}
