import "./styles.css";
import rose from "./assets/barter_items/800001.png";
export default function App() {
  return (
    <div className="App">
      <h1>BDO Barter</h1>
      <h2>To Do's:</h2>
      <p>
        Storage<br></br>
        Central Market<br></br>
        List of Nodes<br></br>
        Lifeskills<br></br>
        Settings<br></br>
      </p>
      <img src={rose} alt="Blue Rose" />
    </div>
  );
}
