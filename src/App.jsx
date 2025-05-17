import "./App.css";
import NavBar from "./Layout/Navbar.jsx";
// import Hero from "./pages/Hero";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="container" style={{ padding: "0px" }}>
        <NavBar />
      </div>
      <Home />
    </>
  );
}

export default App;
