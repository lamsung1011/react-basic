import logo from './logo.svg';
import './App.scss';

import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';

import MyComponent from './Example/MyComponent';
import ChildComponent from './Example/ChildComponent';
import ListTodo from './Todos/ListTodo';

import Nav from './Nav/Nav';
import Home from './Example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />



          <Switch>

            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/todos">
              <ListTodo />
            </Route>

            <Route path="/about">
              <MyComponent />
            </Route>

            <Route path="/users" exact>
              <ListUser />
            </Route>

            <Route path="/users/:id">
              <DetailUser />
            </Route>

          </Switch>

        </header>
      </div>
    </BrowserRouter>


  );
}




export default App;
