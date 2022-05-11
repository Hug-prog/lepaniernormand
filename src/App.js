import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Router from "./router/Router";

function App() {
  const modal = useSelector((state) => state.modalReducer);
  return (
    <div className="m-auto bg-four">
      <Navbar />
      <div className=" w-full" style={{ minHeight: "80vh" }}>
        <Modal state={modal} />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
