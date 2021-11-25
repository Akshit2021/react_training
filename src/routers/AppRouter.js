import React from "react";
import Header from "../componentsnew/Header";
import home from "../componentsnew/Home";
import help from "../componentsnew/Help";
import edit from "../componentsnew/Edit";
// import create from "../componentsnew/Create";
import error from "../componentsnew/error";
import Onepage from "../componentsnew/Onepage"
import {BrowserRouter, Route, Switch, Link, NavLink} from "react-router-dom";


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <p>hi</p>
            <Header/>
            <Switch>
                <Route path="/" component={home} exact={true}/>
                {/* <Route path="/create" component={create}/> */}
                <Route path="/edit" component={edit} exact={true}/>
                <Route path="/edit/:id" component={Onepage} /> 
                <Route path="/help" component={help}/>
                
                <Route component={error}/>
            </Switch>
        </div>
    </BrowserRouter>   
);

export default AppRouter;