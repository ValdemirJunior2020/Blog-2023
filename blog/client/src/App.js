import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog/:postId" component={BlogPost} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
