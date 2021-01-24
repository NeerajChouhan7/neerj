import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './Blogs.css'

function Blogs(){
    return(
        <div className='container p-3'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Essays</li>
                </ol>
            </nav>
            <h1 className='essay mt-4'>Essay V<span className='essay-v'>1</span></h1>
            <div className='essay-btn'>
                <a className='essay-link' href='/essays/memes'><button>Memes 📜</button></a>
            </div>
            <div className='essay-btn'>
                <a className='essay-link' href='/essays/c_bias'><button>Avoiding Confirmation bias 🧠</button></a>
            </div>
        </div>
    )
}

export default Blogs