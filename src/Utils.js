import "./style.css";

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
            <a href="/About Me">About Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
