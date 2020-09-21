import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Auth from '../src/auth';

import StartPage from './pages/StartPage/StartPage';
import Login from './components/views/Login/Login';
import Register from './components/views/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard'



function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Auth(StartPage, false)} />
          <Route exact path="/login" component={Auth(Login, false)} />  
          <Route exact path="/register" component={Auth(Register, false)} />
          <Route exact path="/:userName" component={Dashboard} />    
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
