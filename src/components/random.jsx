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
                    <h6>Connect - <a href='https://twitter.com/_neerajchouhan'>@_neerajchouhan</a></h6>
                </li>
                <li>
                    <h6><Link to='/bookshelf'>Bookshelf</Link></h6>
                </li>
            </ul>
        </div>
    )
}