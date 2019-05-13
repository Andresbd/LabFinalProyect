import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Home from './components/Home';
import Tequileras from './components/Tequileras';
import Search from './components/Search';
import SearchURL from './components/BotellaUrl';
import Historial from './components/MiHistorial';
import { BrowserRouter, Route } from "react-router-dom";

import Amplify, { Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);

class Authentication extends Component {
  signIn(username, pw) {
    try {
      Auth.currentAuthenticatedUser({
        bypassCache: false  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(user => console.log(user))
    .catch(err => console.log(err));
      const user = Auth.signIn(username, pw);
      console.log(user);
    } catch (err) {
      if (err.code === 'UserNotConfirmedException') {
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
    } else if (err.code === 'PasswordResetRequiredException') {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
    } else if (err.code === 'NotAuthorizedException') {
        // The error happens when the incorrect password is provided
    } else if (err.code === 'UserNotFoundException') {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
    } else {
        console.log(err);
    }
    }
  }

  render() {
    return(
      <div>
        <h1>Hola {this.signIn("yo", "tu")}</h1>
      </div>
    );
  }
}

class App extends Component {
  render() {  
    return (
      <div>
        <Authentication />
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

export default App;
