import React from 'react';
import './essay.css';
import { Link } from 'react-router-dom';

function curious(){
    return (
        <div className='essay-container'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to='/essays'>Essays</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Meta - Curious</li>
                </ol>
            </nav>
            <div className='content-div'>
                <h1 className='heading'>Meta - Curious</h1>
                <p>
                "....Intelligence boils down to curiosity," Aaron Swartz said. Humans are inherently curious. But humans who are labeled as intelligent are those who are constantly in the quest to find their "thing". Most people spent their lifetime in order to find their thing. Their thing could come only to them if they let their curiosity be the navigator in their life. it holds true for most intelligent people in every field. But what if someone curious about curiosity. What if someone is <em className='i'>meta-curious</em>? Psychologists and philosophers are closest to being <em className='i'>meta-curious</em>. Why closest because still they have not been able to answer perfectly why are we curious. <br /><br />

They do not care what happened when we moved out of the water to explore land. But they are more interested in why were we so curious to move out of ocean and explore land?
<br /><br />
Behavior is one thing of thing that intrigues me. You can find in that, why we decided to explore land. In fact, understanding human behavior from a mere-animal perspective could answer almost every psychological & existential question. Because your answer will be either survival or reproduction, maybe both. But when consciousness & subjective thinking kicks in, psychology fails. It gets labeled as pseudo-science. Pseudo-science doesn't align with already tested, proven by experiments scientific methods.
<br /><br />
One day, if psychology could figure out what is consciousness? Maybe it would be included in science.
                </p>
            </div>
        </div>
    )
}

export default curious;