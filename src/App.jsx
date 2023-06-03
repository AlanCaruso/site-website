import FavIcon from "../public/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={FavIcon} class="logo" alt="Site Studio" />
        </a>
        <h1>Coming Soon</h1>
        <div class="card">
          <button id="callback-btn" type="button">
            See what's coming ☝️
          </button>
        </div>
        <p class="read-the-docs">Site Studio website created by Alan Caruso.</p>
      </div>
    </>
  );
}

export default App;
