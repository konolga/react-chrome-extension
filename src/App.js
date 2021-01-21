import logo from "./logo.svg";
import "./App.css";
import QuickLinksComponent from "./quick-links/QuickLinksComponent";
import History from "./history/HistoryComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QuickLinksComponent></QuickLinksComponent>
      </header>
      <History></History>
    </div>
  );
}

export default App;
