import "./App.css";
import Hero from "./components/Layout/Hero";
import Login from "./components/Layout/login";
import Navbar from "./components/Layout/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Login />
    </div>
  );
};

export default App;
