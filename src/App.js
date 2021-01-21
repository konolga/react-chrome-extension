import logo from "./logo.svg";
import "./App.css";
import History from "./history/HistoryComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <History></History>
    </div>
  );
}

export default App;
