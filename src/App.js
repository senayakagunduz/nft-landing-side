import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team"
import Unicorns from "./components/Unicorns";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Team/>
      <Unicorns/>
      <Roadmap/>
      <Footer/>
    </div>
  );
}

export default App;
