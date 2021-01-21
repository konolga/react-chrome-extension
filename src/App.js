import logo from "./logo.svg";
import "./App.css";
import QuickLinksComponent from "./quick-links/QuickLinksComponent";
import History from "./history/HistoryComponent";
import SearchBar from "./search/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QuickLinksComponent></QuickLinksComponent>
      </header>
      <SearchBar></SearchBar>
      <History></History>
      <footer>
        <a
          href={`http://generator.lorem-ipsum.info/terms-and-conditions`}
          target="_blank"
          rel="noreferrer"
        >
          Terms and Conditions
        </a>
      </footer>
    </div>
  );
}

export default App;
