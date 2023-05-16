import Navbar from "../components/Navbar"
import "../styles/Home.css"

function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div id="home-container">
        <div id="home-text">
            <h1 className="primary-heading">
                Heading
            </h1>
            <p1 className="primary-text">
                Description Description Description Description Description Description Description
            </p1>
            <div className="install-button">
                Install Now
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
