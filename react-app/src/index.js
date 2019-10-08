import React from 'react';
import ReactDOM from 'react-dom';
import Project from './Project_Component/project';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter ,Route,Switch} from 'react-router-dom';
import Defect from './Defect_Component/defect';
import Login from './Login-Component/login';
import Profile from './Profile_Component/profile';
 
import Home from './home_component/home';
import ProjectList from './projectlist';
import Edit from './Edit_component/Edit';

ReactDOM.render( <BrowserRouter> 
   <Switch>
 
  <Route exact path='/' component={App}/>
  <Route path='/newpro' component={Project}/>
  <Route path='/defect' component={Defect}/>
  <Route path='/log' component={Login}/>
  <Route path='/pro' component={Profile}/>
  <Route path='/hom' component={Home}/>
  <Route path='/list' component={ProjectList}/>
  <Route path='/newpro' component={Project}/>
  <Route path='/Dash' component={Home}/>
  <Route path='/edit/:id' component={Edit}/>
</Switch>
  </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
