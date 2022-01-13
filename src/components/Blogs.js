import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
function Blogs(){
    return(
        <div className='container essay-div text-start row p-3 mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Essays</li>
                </ol>
            </nav>
            <h2 className='essay mt-4'>Essays</h2>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/memes'>Memes</Link>
            </div>
                <div className='essay-btn'>
                <Link className='essay-link' to='/essays/stories'>Stories </Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/c_bias'>Avoiding Confirmation bias</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/meta-curious'>Meta-Curiosity </Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/privilege'>Privilege</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/metaverse'>Metaverse - Non-entropy world</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/friendships'>On friendships</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/music'>Music</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/fear-and-freedom'>Fear and freedom</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/cinema'>Cinema & Pop Culture</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/anxiety'>On anxiety</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/thinking-mold'>Thinking Mold</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/morality'>Morality: Squid Game</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/truth'>Truth and honoring commitments</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/write'>Why do I write?</Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/solend'>Blockchain Deep Dive: Solend </Link>
            </div>
            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/timeswap'>Blockchain Deep Dive: Timeswap</Link>
            </div>

            <div className='essay-btn'>
                <Link className='essay-link' to='/essays/biconomy'>Blockchain Deep Dive: Biconomy </Link>
            </div>
            <div className='border-bottom border-light border-5'></div>
            <p className='mt-3'>Read 'em on <a target='_blank' href='https://neerajc.substack.com/'>Substack</a>.</p>
        </div>
    )
}

export default Blogs
