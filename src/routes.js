import React from 'react'
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
const route = () => {
    return (
        <Router>
            <div>
                <Route path="/" exact component={App}/>
            </div>
        </Router>
    )
}

export default route
