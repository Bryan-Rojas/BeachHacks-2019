import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Register from './Register';


// Route to the website, if our url = beachhacks.com, that routePath
const routePath = process.env.PUBLIC_URL;

export default class Router extends Component {
    
   
    render(){
        return(
            <BrowserRouter>
                <div className="s-container">
                    {/* Default route (index.js) */}
                    <Route exact path={routePath + "/"} component ={Home}/>
                    <Route exact path={routePath + "/register"} component ={Register}/>

                </div>
            </BrowserRouter>
        )
    }
}
