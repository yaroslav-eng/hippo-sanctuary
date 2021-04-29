import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Hippo from "./Components/Hippo/Hippo";

ReactDOM.render(

  <React.StrictMode>


      <BrowserRouter>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@500&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
          <Switch>
          <Route exact path={["/", "/home"]} component={App} />
          <Route exact path="/hippopotamus" component={Hippo} />
      </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
