import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Router from "./router/Router";

function App() {
  return (
    <div className="max-w-screen-2xl m-auto">
      <Navbar />
      <div className=" w-full" style={{ minHeight: "80vh" }}>
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
