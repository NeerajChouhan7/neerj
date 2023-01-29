import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
import identity from './components/all_blogs/identity';
import thinking from './components/all_blogs/thinking';
import morality from './components/all_blogs/morality';
import poetry from './components/all_blogs/poetry';
import timeswap from './components/all_blogs/timeswap';
import solend from './components/all_blogs/solend';
import write from './components/all_blogs/write';
import biconomy from './components/all_blogs/fiction/biconomy';
import hubble from './components/all_blogs/hubble';
import love from './components/all_blogs/love';
import superficial from './components/all_blogs/superficial';
import great from './components/all_blogs/great';
import language from './components/all_blogs/language';
import melancholic from './components/all_blogs/melancholic';




function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={Home} />
          <Route path='/essays/memes' element={memes} />
          <Route path='/essays/c_bias' element={c_bias} />
          <Route path='/essays/stories' element={stories} />
          <Route path='/essays/cinema' element={cinema} />
          <Route path='/essays/meta-curious' element={curious} />
          <Route path='/essays/metaverse' element={metaverse} />
          <Route path='/essays/privilege' element={privilege} />
          <Route path='/essays/friendships' element={friends} />
          <Route path='/essays/music' element={music} />
          <Route path='/essays/fear-and-freedom' element={fear} />
          <Route path='/essays/anxiety' element={anxiety} />
          <Route path='/essays/thinking-mold' element={thinking} />
          <Route path='/essays/morality' element={morality} />
          <Route path='/essays/truth' element={truth} />
          <Route path='/essays/write' element={write} />
          <Route path='/essays/identity' element={identity} />
          <Route path='/essays/love' element={love} />
          <Route path='/essays/language' element={language} />
          <Route path='/essays/superficial' element={superficial} />
          <Route path='/essays/great' element={great} />
          <Route path='/essays/melancholic' element={melancholic} />
          <Route path='/essays/timeswap' element={timeswap} />
          <Route path='/essays/solend' element={solend} />
          <Route path='/essays/biconomy' element={biconomy} />
          <Route path='/essays/hubble' element={hubble} />
          <Route path='/fiction/freedom' element={freedom} />
          <Route path='/dead-poet-society' element={poetry} />
          <Route path='/random' element={random} />
          <Route path='/bookshelf' element={bookshelf} />
          <Route path='/essays' element={Blogs} />
          <Route path='/work' element={work} />
          <Route path='/about' element={About} />
          <Route path='/psych-archives' element={Psych} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

