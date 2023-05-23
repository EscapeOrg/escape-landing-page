import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home"
import About from "./pages/About"
import Features from './pages/Features';
import Team from './pages/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Features></Features>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;
