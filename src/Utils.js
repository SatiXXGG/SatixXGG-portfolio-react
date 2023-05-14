
//images
import RobloxLogo from "./Pages/Media/roblox.png"
import Fiverr from "./Pages/Media/fiverr.png"
import Github from "./Pages/Media/github.png"
import Checkmark from "./Pages/PagesMedia/Checkmark.png"


export function NavigationBar() {
  return (
    <div className="nav-bar">
      <nav>
        <h1><a href="/">SatixXGG</a></h1>
        <ul>
          <li>
            <a href="/prices">Prices</a>
          </li>
          <li>
            <a href="/Examples">Examples</a>
          </li>
          <li>
            <a href="/Contact Me">Contact Me</a>
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
          <a href="https://www.roblox.com/users/409509982/profile" target="_blank">
            <img src={RobloxLogo}></img>
          </a>
        </li>

        <li>
          <a href="https://es.fiverr.com/satixx?up_rollout=true" target="_blank">
            <img src={Fiverr}></img>
          </a>
        </li>

      </ul>
    </div>
  )
}

export function PriceContainer(PlanName="Basic", Info="No info provided", Include=["Source Code", "js"], Price="5 - 15 USD") {
  return (
    <div className="prices glass">
      <h1>{PlanName}</h1>
      <p className="prices-description">{Info}</p>
      <h3>Includes</h3>
      <ul>
          {
            Include.map((value, index) => {
              return (
                <li><img src={Checkmark} /> <a>{value}</a></li>
              )
            })
          }
      </ul>
      <h2>{Price}</h2>
    </div>
  )
}
