import { Features, Hero, Navbar, Newmembers } from "./Components";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Newmembers />
    </div>
  );
}

export default App;
