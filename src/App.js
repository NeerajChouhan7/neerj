import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Blogs from './components/Blogs';
import Work from './components/Work';
import memes from './components/all_blogs/memes';
import c_bias from './components/all_blogs/c_bias';
import cinema from './components/all_blogs/cinema';
import bookshelf from './components/bookshelf';
import random from './components/random';
import curious from './components/all_blogs/meta-curious';
import freedom from './components/all_blogs/fiction/freedom';
import privilege from './components/all_blogs/privilege';





function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/essays/memes' component={memes} />
          <Route path='/essays/c_bias' component={c_bias} />
          <Route path='/essays/cinema' component={cinema} />
          <Route path='/essays/meta-curious' component={curious} />
          <Route path='/essays/privilege' component={[privilege]} />
          <Route path='/fiction/freedom' component={freedom} />
          <Route path='/random' component={random} />
          <Route path='/bookshelf' component={bookshelf} />
          <Route path='/essays' component={Blogs} />
          <Route path='/work' component={Work} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

