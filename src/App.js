import './App.css';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Page from "./components/Page"



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Page}/>

      </Switch> 
    </div>
    </BrowserRouter>
  );
}

export default App;
