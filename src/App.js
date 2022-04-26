import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./router/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        className="static w-full"
        style={{ minHeight: "80vh", marginTop: "5rem" }}
      >
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
