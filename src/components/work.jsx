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
            
           <h6>Currently...</h6>
           <li>
             Writing a research paper on <span className="highlight">Augmented Reality(AR)</span>
           </li>
           <li>
             Exploring <span className='highlight'>blockchain</span> and working on a side project: <em className='i'>Study</em>
           </li>
           <li>
            Writing newsletter on, about almost everthing on <a href='https://neerajc.substack.com/'>Substack</a>.
           </li>
           <li>
            Running a newsletter on psychology with ~300 members. If you want to be part of it, click <a href='https://api.whatsapp.com/send/?phone=917247796922&text=Hey,+I+got+to+know+about+Psych.+I+would+love+to+be+part+of+it!&app_absent=0'>here</a>
           </li>
           <br/>
           <h6>Ex</h6>
           <li>
             Product Management Intern at <a href='https://upraised.co/'>Upraised</a>
           </li>
           <li>
             Front-end dev at <a href='https://www.revoteen.com/'>Revoteen</a>
           </li>
           <br />
           <h6>Also...</h6>
           <li>
            Built several projects as a freelancer like chrome extension for Amazon sellers, E-commerce store to sell ppe-kits etc.
           </li>
           <li>
            If you're Linkedin kinda...<a href='https://www.linkedin.com/in/neeraj-chouhan-profile/'>here</a>
           </li>
           <br/>
           <br/><br/>
        </div>
    )
}

export default Work