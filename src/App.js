
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./components/Tasks";
import Bin from "./components/Bin";
import Notes from "./components/Notes";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/bin">
              <Bin />
            </Route>
            <Route path="/notes">
              <Notes />
            </Route>
          </Switch>
        </div>
      
    </Router>
  );
}

export default App;
