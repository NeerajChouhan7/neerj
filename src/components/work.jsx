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
             Having fun buidling Defi at <a target='_blank' href='https://market.xyz'>Market</a>
           </li>
           <li>
            Writing newsletter on, about almost everything called <a href='https://neerajc.substack.com/'>Thinking Mold</a>.
           </li>
           <li>
            Running a newsletter on psychology with ~300 members. Click <a href='https://api.whatsapp.com/send/?phone=917247796922&text=Hey,+I+got+to+know+about+Psych.+I+would+love+to+be+part+of+it!&app_absent=0'>here</a> to join. You can visit the archives <Link to='/psych-archives'>here</Link> 
           </li>
           <br/>
           <h6>Did</h6>
           <li>
            Wrote a research paper on Augmented Reality(AR) in Education. <a href='https://drive.google.com/file/d/1Dd4GnqjlP_PW39I23CVbKbgPTG4alB0i/view?usp=sharing' target='_blank' style={{borderRadius:'2px'}}><img class='link-img' src="https://img.icons8.com/ios-glyphs/30/000000/external-link.png"/></a> 
           </li>
           <li>
             Product Management Intern at <a href='https://upraised.co/'>Upraised</a> (~10 months)
           </li>
           <li>
             Front-end dev at <a href='https://www.revoteen.com/'>Revoteen</a> (~4 months)
           </li>
           <li>
            Built several projects as a freelancer like chrome extension for Amazon sellers, E-commerce store to sell ppe-kits etc.
           </li>           
           <br/>
           <br/><br/>
        </div>
    )
}

export default Work
