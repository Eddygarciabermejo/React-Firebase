import { BrowserRouter, Route, Link , Switch} from "react-router-dom";
import React from 'react';


import Login from '../containers/Login'
import SignUp from '../containers/SignUp'
import Languaje from '../containers/Languaje'
import Typeuser from '../containers/Typeuser'
import Recover from '../containers/Recover'
import Home from '../containers/Home'
import List from '../containers/List'
import Splash from '../containers/Splash'


const App = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Splash}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/sign" component={SignUp}/>
            <Route exact path="/languaje" component={Languaje}/>
            <Route exact path="/typeuser" component={Typeuser}/>3
            <Route exact path="/recover" component={Recover}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/list" component={List}/>

        </Switch>
    </BrowserRouter>
)

export default App;