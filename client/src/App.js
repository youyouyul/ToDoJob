import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './components/views/StartPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={StartPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
