import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router";
import Task from "./Pages/Task";
import Login from "./Pages/Auth/Login";
import Spinner from "./Components/Spinner";
import Create from "./Pages/Create";
import { ConnectedRouter } from 'connected-react-router'
import history from "./utils/history";
import Uptade from "./Pages/Uptade"
import MyTask from "./Pages/MyTask";
import Pendings from "./Pages/Pendings"


export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/task">
              <Task />
            </Route>
            <Route path="/task/create">
              <Create />
            </Route>
            <Route path="/task/myTasks">
              <MyTask />
            </Route>
            <Route path="/task/pendings">
              <Pendings />
            </Route>
            <Route path="/task/uptade/:id">
              <Uptade />
            </Route>
            <Route component={() => <div>404</div>} />
          </Switch>
        </ConnectedRouter>
        <Spinner />
      </div>
    );
  }
}

export default App;
