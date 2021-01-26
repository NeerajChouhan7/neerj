import React from 'react';
import { Link } from 'react-router-dom';

export default function random(){
    return(
        <div className='container  mt-5'>
             <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Random</li>
                </ol>
            </nav>
            <ul>
                <li>
                    <h5>Twitter - <a href='https://twitter.com/_neerajchouhan'>@_neerajchouhan</a></h5>
                </li>
                <li>
                    <h5>Linkedin - <a href='https://www.linkedin.com/in/neeraj-chouhan-profile/'>Neeraj Chouhan</a></h5>
                </li>
                <li>
                    <h5>Email - neeraj1chouhan@gmail.com</h5>
                </li>
                <li>
                    <h5><Link to='/bookshelf'>Bookshelf </Link>📚</h5>
                </li>
            </ul>
        </div>
    )
}