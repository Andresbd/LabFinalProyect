import React, { Component } from 'react';

/** Components **/
import TopBar from './components/TopBar';
import Home from './components/Home';
import Tequileras from './components/Tequileras';
import Search from './components/Search';
import SearchURL from './components/BotellaUrl';
import Historial from './components/MiHistorial';

/** React Router **/
import { BrowserRouter, Route } from "react-router-dom";

/** AWS Stuff **/
import { withAuthenticator } from 'aws-amplify-react';

class App extends Component {
  render() {  
    return (
      <div>
        <TopBar />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home} />
            <Route path='/sku' exact component={Search} />
            <Route path='/sku/:sku' exact component={SearchURL} />
            <Route path='/tequileras' component={Tequileras} />
            <Route path='/historial' exact component={Historial} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
