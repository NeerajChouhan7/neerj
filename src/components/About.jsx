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
            <p className='py-auto mt-4'> Hey hey, good to see you here, </p>
            <p>I am Neeraj.</p>
            <p>A nomad genz, currently based out of India.</p>
            <p>It has been quite difficult for me to list down my interests.</p>
            <p>But some of the fields that I have been interested from quite a long time are tech, art, psychology and writing. In the same order of magnitude.</p>
            <p>In the near future, I will be studying one of the above mentioned fields in usa.</p>
            <p>Running few things on the internet, here and there. More about them <Link to='/work'>here</Link>.</p>
            <p>p.s. feel free to reach out, if you are working on some cool stuff, need help with anything or just intellectually curious. Here's my <Link to='/random'>contact</Link></p>
            
        </div>
    )
}

export default About