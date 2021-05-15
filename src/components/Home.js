import React, { Profiler } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Blogs from './Blogs';
import './Home.css';
import LODASH from 'lodash'
import 'jquery';
if (process.env.NODE_ENV !== 'production') console.log(LODASH)

function Home() {
  
    // if(window.screen.width <= 520){
    //     if(window.innerHeight != document.body.scrollHeight){
    //     setTimeout(function(){ 
    //             var num = 0
    //             setInterval(() => {
    //                 if(window.innerHeight == document.body.scrollHeight){
    //                     return '';
    //                 }else{
    //                     window.scrollTo({ left: 0, top: num, behavior: "smooth" });
    //                     num +=10;
    //                 }
    //             }, 100);
    //          }, 7000);
    //         }
    // }
    
  return (
    <div className="App">
        <div className='container main-div'>
          <div className="row align-items-start header-div p-5 pb-0">
            <div className="col-8 intro">
                <h1 id="typedtext">Hey 👋<span className='hide'>, How's it going?</span></h1>
            </div>
            <div className="col-4 img-div">
                <a href='https://twitter.com/_neerajchouhan' target='_blank'><img  className='img' src='https://pbs.twimg.com/profile_images/1361225951678357504/54aQSGQs_400x400.jpg'/></a>
            </div>
        </div>
            <p className='content p-5'>
            I am Neeraj, Currently working as a product management intern at <a data-content='Upraised' href='https://upraised.co' target="_blank">Upraised</a>. Learning <em className='i'>everything</em> to build frontier technology in near future.
Interested in Psychology & Tech, running a newsletter with ~300 members on same. 
In the process of applying abroad for further studies in the field of psychology, economics or film-making. 
Also, I do write sometimes which you can check <Link to='/essays'>here</Link>. And if you like Substack and want latest posts right in your inbox, drop your email <a data-content='Upraised' href='https://neerajc.substack.com/"_blank">here</a> . If you are interested in any of things mentioned above, need any help or just want to talk about anything feel free to <Link to='/random'>reach out</Link> to me :)
    BTW, if you like coffee ☕, click <a data-content='Upraised' href='https://www.buymeacoffee.com/neer' target="_blank">here</a> 

            </p>
        </div>
        <div className="container">
            <div className="header row p-4">
                <div className='psych-btn' id='psych-btn'>
                    <a className='essay-link' href='https://api.whatsapp.com/send/?phone=917247796922&text=Hey,+I+got+to+know+about+Psych.+I+would+love+to+be+part+of+it!&app_absent=0' target='_blank'><button>Psych 🧠</button></a>
                </div>
                <div className='blog-btn' id='essay-btn'>
                    <Link className='essay-link' to='/essays'><button>Essay ✍🏻</button></Link>
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Home;


{/* {<div className='col-6 text-align-center my-img-div'>
                <img className='my-img' src='https://images.pexels.com/photos/5745979/pexels-photo-5745979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' width='40' height='40'/>
            </div>} */}
