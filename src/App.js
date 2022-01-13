import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Blogs from './components/Blogs';
import work from './components/work';
import memes from './components/all_blogs/memes';
import c_bias from './components/all_blogs/c_bias';
import stories from './components/all_blogs/stories';
import bookshelf from './components/bookshelf';
import random from './components/random';
import curious from './components/all_blogs/meta-curious';
import freedom from './components/all_blogs/fiction/freedom';
import privilege from './components/all_blogs/privilege';
import About from './components/About';
import metaverse from './components/all_blogs/metaverse';
import friends from './components/all_blogs/friends'
import music from './components/all_blogs/music'
import fear from './components/all_blogs/fear';
import cinema from './components/all_blogs/cinema';
import Psych from './components/psych';
import anxiety from './components/all_blogs/anxiety';
import truth from './components/all_blogs/truth';
import thinking from './components/all_blogs/thinking';
import morality from './components/all_blogs/morality';
import poetry from './components/all_blogs/poetry';
import timeswap from './components/all_blogs/timeswap';
import solend from './components/all_blogs/solend';
import biconomy from './components/all_blogs/Biconomy';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/essays/memes' component={memes} />
          <Route path='/essays/c_bias' component={c_bias} />
          <Route path='/essays/stories' component={stories} />
          <Route path='/essays/cinema' component={cinema} />
          <Route path='/essays/meta-curious' component={curious} />
          <Route path='/essays/metaverse' component={metaverse} />
          <Route path='/essays/privilege' component={privilege} />
          <Route path='/essays/friendships' component={friends} />
          <Route path='/essays/music' component={music} />
          <Route path='/essays/fear-and-freedom' component={fear} />
          <Route path='/essays/anxiety' component={anxiety} />
          <Route path='/essays/thinking-mold' component={thinking} />
          <Route path='/essays/morality' component={morality} />
          <Route path='/essays/truth' component={truth} />
          {/* <Route path='/essays/write' component={write} /> */}
          <Route path='/essays/timeswap' component={timeswap} />
          <Route path='/essays/solend' component={solend} />
          <Route path='/essays/biconomy' component={biconomy} />
          <Route path='/fiction/freedom' component={freedom} />
          <Route path='/dead-poet-society' component={poetry} />
          <Route path='/random' component={random} />
          <Route path='/bookshelf' component={bookshelf} />
          <Route path='/essays' component={Blogs} />
          <Route path='/work' component={work} />
          <Route path='/about' component={About} />
          <Route path='/psych-archives' component={Psych} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

