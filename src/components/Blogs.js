import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './Blogs.css'

function Blogs(){
    return(
        <div className='container p-3'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Essays</li>
                </ol>
            </nav>
            <h1 className='essay mt-4'>Essay V<span className='essay-v'>1</span></h1>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/memes'><button>Memes 📜</button></Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/c_bias'><button>Avoiding Confirmation bias 🧠</button></Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/cinema'><button>Stories 📽️</button></Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/meta-curious'><button>Meta-Curiosity 🕵️</button></Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/privilege'><button>Privilege 🎰</button></Link>
            </div>
        </div>
    )
}

export default Blogs
