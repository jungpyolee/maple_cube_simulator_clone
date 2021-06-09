import Layout, { Content, Header } from "antd/lib/layout/layout";
import "./App.css";
import Cube from "./components/Main/Cube/Cube";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <Cube />
    </div>
  );
}

export default App;
