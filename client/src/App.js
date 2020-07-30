import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from './components/views/StartPage';
import Login from './components/views/Login';
import Register from './components/views/Register';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/login" component={Login} />  
          <Route exact path="/register" component={Register} />    
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
