import React from 'react';
import { Link } from 'react-router-dom';


function Work() {
    return(
        <div className='container mt-5 text-start mx-auto work-list'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Work</li>
                </ol>
            </nav>
            
           <h6>Do</h6>
            <li>
            Ideating on a product. If you are a manager or team leader... <a target='_blank' href='https://twitter.com/neervj'>DM</a>!
           </li>
            <li>
                Working at <a target='_blank' href='https://emerge.io'>Emerge</a> as Special Projects Intern.
            </li>
           <li>
            Writing some essays , <Link to='/essays'>here</Link></p>
           </li>
           <br/>
           <h6>Did</h6>
        
           <li>
            Ran a newsletter on psychology with ~300 members. You can visit the archives <Link to='/psych-archives'>here</Link> 
           </li>
           <li>
           Did generalist stuff at <a target='_blank' href='https://market.xyz'>Market</a>
           </li>

           <li>
            Wrote a research paper on Augmented Reality(AR) in Education. <a  target='_blank' href='https://drive.google.com/file/d/1Dd4GnqjlP_PW39I23CVbKbgPTG4alB0i/view?usp=sharing'  style={{borderRadius:'2px'}}><img class='link-img' src="https://img.icons8.com/ios-glyphs/30/000000/external-link.png"/></a> 
           </li>
           <li>
             Product Management Intern at <a href='https://upraised.co/'>Upraised</a> (10 months)
           </li>
           <li>
             Front-end dev at <a  target='_blank' href='https://www.revoteen.com/'>Revoteen</a> 
           </li>
           <li>
            Built several projects as a freelancer like chrome extension for Amazon sellers, E-commerce store to sell ppe-kits etc. etc.
           </li>           
           <br/>
           <br/><br/>
            <a target='_blank' href='https://twitter.com/neervj'>DM</a> me.
        </div>
    )
}

export default Work
