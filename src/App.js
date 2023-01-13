import Collection from "./components/Collection";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Team from "./components/Team"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Collection/>
      <Team/>
    </div>
  );
}

export default App;
