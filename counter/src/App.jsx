import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Modal from "./components/Modal";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import Privacy from "./components/Privacy";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <center className="px-4 py-5 my-5">
      <Modal>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <Privacy /> : <DisplayCounter />}
          <Controls />
        </div>
      </Modal>
    </center>
  );
}

export default App;
