import { Features, Footer, Hero, Navbar, Newmembers } from "./Components";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Newmembers />
      <Footer />
    </div>
  );
}

export default App;
