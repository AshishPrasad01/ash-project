import './App.css';
import Parent from './Component/Parent/Parent';
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css";
import Child from './Component/Child/Child';
import State from './Component/State/State';
import A from './Component/Comp/A'
import Nav from './Component/Nav/Nav';
import { BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom'
import Ajax from './Component/Ajax/Ajax';
import RedComponent from './RedComponent/RedComponent';


function App() {
  return (
    <div className="App">

      {/* <Parent /> */}
      {/* <State />
       */}
      <BrowserRouter>
        <Nav />

        <Switch>
          <Route exact path ='/Parent' component ={Parent}></Route>
          <Route exact path ='/State' component ={State}></Route>
          <Route exact path ='/Ajax' component ={Ajax}></Route>
          <Route exact path ='/Redux' component ={RedComponent}></Route>
        </ Switch >

      </BrowserRouter>

    </div>
  );
}

export default App;
