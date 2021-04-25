import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import Form from "./form";
import Submitted from "./submitted";
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />

                <Switch>
                    <Route path="/submitted-issue" component={Submitted} />
                    <Route path="/" component={Form} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
