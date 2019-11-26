import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import HomePage from './HomePage/homepage';
import Login from './pages/Login/login';

class IndexPage extends React.Component{
    render(){
        return(
            <div>
               <BrowserRouter>
               <Switch>
               <Route path="/homepage" exact component={HomePage}></Route>
               <Redirect to="/homepage"></Redirect> 
               <Route path="/auth/login" component={Login}></Route>
               </Switch>
               </BrowserRouter>
            </div>
        )
    }
}


ReactDOM.render(<IndexPage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
