import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import Login from './components/views/Login/Login';
import Register from './components/views/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard'


function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/login" component={Login} />  
          <Route exact path="/register" component={Register} />
          <Route exact path="/:userName" component={Dashboard} />    
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
