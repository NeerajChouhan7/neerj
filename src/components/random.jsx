import React from 'react';
import { Link } from 'react-router-dom';

export default function random(){
    return(
        <div className='container mt-5'>
             <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
            <ul>
                <li>
                    <h6><a href='https://twitter.com/_neerajchouhan'>Twitter</a></h6>
                </li>
                <li>
                    <h6><a href='https://www.linkedin.com/in/neeraj-chouhan-profile/'>Linkedin</a></h6>
                </li><li>
                    <h6><a href='https://open.spotify.com/user/8fefzplg3rfjk9puyklx9b029'>Spotify</a> (yes, it's important)</h6>
                </li>
                <li>
                    <h6>Email - neeraj1chouhan@gmail.com</h6>
                </li>
                <li>
                    <h6><Link to='/bookshelf'>Bookshelf</Link> (wasn't able to find a better place for this)</h6>
                </li>
            </ul>
        </div>
    )
}
