import FavIcon from "/logo.png";
import "./App.css";

function App() {
  const goToPage = () => {
    const url =
      "https://www.figma.com/file/WSIp4xh8qtU25GPdmEG7ZN/Site-Studio?type=design&node-id=0%3A1&mode=design&t=yIo3CCdEpZe1IRt0-1";
    open(url);
  };
  return (
    <>
      <div>
        <a onClick={goToPage} target="_blank">
          <img src={FavIcon} class="logo" alt="Site Studio" />
        </a>
        <h1>Coming Soon</h1>
        <div class="card">
          <button onClick={goToPage} id="callback-btn" type="button">
            Look what is being built ☝️
          </button>
        </div>
        <p class="read-the-docs">
          Site Studio website created by{" "}
          <a target="blank_" href="https://sitestudio.online/me">
            Alan Caruso.
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
