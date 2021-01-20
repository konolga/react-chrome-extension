import logo from "./logo.svg";
import "./App.css";
import History from "./history/HistoryComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <History></History>
      </header>
    </div>
  );
}

export default App;
