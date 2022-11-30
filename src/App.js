import { Features, Hero, Navbar } from "./Components";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
