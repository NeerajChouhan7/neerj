import React from 'react';
import { Link } from 'react-router-dom';


function About() {
    return(
        <div className='container text-start mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">About</li>
                </ol>
            </nav>
            <p className='py-auto mt-4'> hey hey, good to see you here!, </p>
            <p>i am Neeraj.</p>
            <p>working on cool projects and chasing best experiences life could possibly offer. </p>
            <p>on a gap year from uni in Spain, currently based out of banglore, india.</p>
            <p>it has been quite difficult for me to list down my interests.</p>
            <p>but some of the fields that I have been interested from quite a long time are tech, art, psychology and writing. In the same order of magnitude.</p>
            <p>in the near future, I will be studying one of the above mentioned fields abroad.</p>
            <p>running few things on the internet, more about them <Link to='/work'>here</Link>.</p>
            <p>p.s. feel free to reach out, if you are working on some cool stuff, need help with anything or just intellectually curious. Here are my <Link to='/random'>contacts</Link></p>
            
        </div>
    )
}

export default About
