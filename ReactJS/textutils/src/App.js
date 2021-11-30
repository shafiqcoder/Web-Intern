import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextForm title="Enter your Text to analyze" />
      </div>
    </>
  );
}

export default App;
