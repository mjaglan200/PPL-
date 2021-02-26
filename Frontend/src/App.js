import logo from './logo.svg';
import './App.css';
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import Timeline from './Component/Timeline/Timeline'
import NewTabLike from './Component/NewTabLike/NewTabLike'
import RegisNavbar from './Component/Register/Navbar/RegisNavbar'
import RegisFooter from './Component/Register/Footer/RegisFooter'
import Forgot from './Component/ForgotPassword/index'
import Reset from './Component/Reset/Reset'
// import RegisLeftpart from './Component/Register/Leftpart/RegisLeftpart'
import {BrowserRouter as Router,Switch,Route,withRouter} from 'react-router-dom';

function App() {
  return (    
    <div> 
  <RegisNavbar />
  <div className="container">
<div className="content">
 <Router >
    <Switch>
    <Route path="/" exact component={Register} /> 
    <Route path="/Login"  component={Login} />
    <Route path="/Register" component={Register} />
    <Route path='/Timeline' component={Timeline} />
    <Route path='/SinglePost' component={NewTabLike} />
    <Route path='/Forgot' component={Forgot} />
    <Route path='/Reset' component={Reset} />

    </Switch>
  </Router>
  </div>
  </div>
  <RegisFooter />
    </div>
  );
}


export default App



