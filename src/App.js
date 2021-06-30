import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Blogs from './components/Blogs';
import work from './components/work';
import memes from './components/all_blogs/memes';
import c_bias from './components/all_blogs/c_bias';
import cinema from './components/all_blogs/cinema';
import bookshelf from './components/bookshelf';
import random from './components/random';
import curious from './components/all_blogs/meta-curious';
import freedom from './components/all_blogs/fiction/freedom';
import privilege from './components/all_blogs/privilege';
import About from './components/About';
import metaverse from './components/all_blogs/metaverse';
import friends from './components/all_blogs/friends'



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/essays/memes' component={memes} />
          <Route path='/essays/c_bias' component={c_bias} />
          <Route path='/essays/stories' component={cinema} />
          <Route path='/essays/meta-curious' component={curious} />
          <Route path='/essays/metaverse' component={metaverse} />
          <Route path='/essays/privilege' component={privilege} />
          <Route path='/essays/friendships' component={privilege} />
          <Route path='/fiction/freedom' component={freedom} />
          <Route path='/random' component={random} />
          <Route path='/bookshelf' component={bookshelf} />
          <Route path='/essays' component={Blogs} />
          <Route path='/work' component={work} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

