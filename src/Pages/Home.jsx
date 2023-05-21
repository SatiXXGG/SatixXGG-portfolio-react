import { ContactBar , NavigationBar } from "../Utils.jsx";
import Logo from "./PagesMedia/Logo.png";
import "./home-style.css";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="about-me-info">
        <img src={Logo} />
        <h2>General About Me</h2>
        <p>
          My name is Alejandro Vela but you can call me Ale or Satixx, I am a
          programmer with experience and a lot of qualty on his work. I love
          playing games and be efficient for earn money; I usually code all day
          in the programming language i want to, my native language is spanish
          but i can also speak english
        </p>
        <h2>My hobbies</h2>
        <p>
          I love watching movies, i also watch anime but not a lot so i dont
          consider myself a otaku. I like playing games like Roblox, minecraft
          and sometimes Valorant with my friends. I am a very competitive player
        </p>
        <h2>Past work</h2>
        <p>
          I didnt work in a very big game right now but I am a very experienced
          in almost all things like UI Design, programming and sometimes
          building I like making new systems and learn new things like
          programming languages or new technologies
        </p>
      </div>
      <ContactBar />
    </>
  );
}

export default App;
