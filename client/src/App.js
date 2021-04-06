import Main from "./components/pages/main/Main";
import { Router } from "react-router-dom";
import history from "./history";
import "./theme/base.scss";
function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Main></Main>
      </div>
    </Router>
  );
}

export default App;
