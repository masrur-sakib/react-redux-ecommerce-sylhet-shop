import './App.css';
import Header from './component/Header/Header';
import Home from './component/MockupOne/Home/Home';
import Cart from './component/MockupTwo/Cart/Cart';
import NotFound from './component/NotFound/NotFound';
import Footer from './component/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
