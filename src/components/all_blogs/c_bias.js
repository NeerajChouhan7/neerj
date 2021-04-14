import './essay.css'
import { Link } from 'react-router-dom';
function c_bias() {
    return(
        <div className='essay-container'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to='/essays'>Essays</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Avoiding confirmation bias</li>
                </ol>
            </nav>
            <div className='content-div'>
            <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-placement="right" data-bs-trigger="hover focus" data-bs-content="14 Jan 2021">
                <h1 className='heading'>Avoiding confirmation bias</h1>
            </span>
            <p><br />
            What is confirmation bias? 

How can you avoid it in your decision making?<br /><br />

According to Wikipedia,  It is the tendency to search to, interpret, favor, and recall information in a way that confirms or supports one's prior beliefs or values.

Basically, selective collection of evidence for your decision making aligned with beliefs you hold.<br /><br />

<strong>“What the human being is best at doing is interpreting all new information so that their prior conclusions remain intact.”</strong>

— Warren Buffett. 

For most of human history, Decisions tended to be survival based. Humans experienced very little new information during their lifetimes. 

But with the abundance of information in the world right now. It is a human nature to filter the information and gravitate towards that confirms the beliefs one holds.

<br /><br />Mostly you are not aware of biases that you have and is it affecting your decision making. Confirmation bias clouds our judgment.<em className='i'> World is want you want to believe it is. </em>

 So, how can you try your best to avoid it?
<br /><br />
Beware of repetition. 
We often think something is true when we have heard it so many times. Because a lie told thousand times eventually becomes a truth. It is one of many weaknesses in the human sensory system. 
<br /><br />
Avoid Instant decisions, if it's an important one.

Take a bit more time to come to a decision. First, look for data that doesn't confirm your initial view, then articulate the problem statement so that it does not align with your beliefs.
<br /><br />
Go to someone who has 0 clue.

Find someone who has no idea about the domain of the problem. It will definitely not be the best answer. But it can be most unbiased one.
<br /><br />
External feedback.

Information is external. Mostly, feedback is internal. That feedback comes with bias. Seek external feedback. That also will come with bias but make sure you are not agreeing with everything.
<br /><br />
Opposing ideas.

Keep exposing yourself to the information which has contrary & opposing beliefs to yours. Ideas that question the beliefs you hold.

Also, fun activity, observe your emotion when you come across such ideas.
<br /><br />
Identify.

If you are agreeing with something. Observe if you are agreeing with an idea or identity. Humans stop questioning beliefs coming from someone who is higher in power, in any sense of the word.
            </p>
        </div>
        </div>
    )
}

export default c_bias
