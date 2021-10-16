import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
   <div>
    <Router>
      <NavBar />
        <Switch>
         <Route exact path="/">
           <Home />
         </Route>
         <Route exact path="/home">
           <Home />
         </Route>
         <Route exact path="/login">
           <Login />
         </Route>
         <Route exact path="/signup">
           <SignUp />
         </Route>
         <Route path="*">
           <NotFound />
         </Route>
       </Switch>
       <Footer />
    </Router>
   </div>   
   
  );
}

export default App;
