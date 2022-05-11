import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Router from "./router/Router";

function App() {
  const modal = useSelector(state => state.modalReducer);
  return (
    <div className="w-screen h-auto m-auto bg-four">
      <Navbar />
      <div className=" w-full h-auto min-h-screen">
        <Modal state={modal} />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
