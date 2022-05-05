import React from 'react';
import { Link } from 'react-router-dom';

function great(){
    return (
        <div className='container mx-auto text-start mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to='/essays'>Essays</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Being great: creativity & mathematics</li>
                </ol>
            </nav>
            <div className='content-div'>
                <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-placement="right"data-bs-trigger="hover focus" data-bs-content="30 Apr 2022">
                    <h1 className='heading strong bold'>Being great: creativity & mathematics</h1>
                </span>
                <p>
                I have not skipped any monthly essays in the last 20 months. It was not looking to go up to 21. Simply because I did not have any good idea after posting the last essay. But as I was writing on 29th April, just one day before breaking the streak, I had three options.
                <br /><br/>
First, break the streak. Second, post some old unfinished poorly edited essay. Third and the most interesting one, leave study for the exam that I have in just 7 days to sit down to write something worthy. Well, you know what I chose.
<br /><br/>
As I mentioned earlier, I did not post for a while because creativity did not hit me during that period. I wrote some rookie short fiction at that time. But no essays. Ironically, I had more experiences during this period than in the last 2 years combined. Maybe that was the reason in the first place.
<br /><br/>
This is a common struggle with people who are in a creative pursuit, unlike me. At least the ones I have talked to do. Creativity strikes whenever and you need to acknowledge it. It’s random. So, do people with creative pursuits keep doing nothing until creativity strikes them. Should they not have a routine and structure since their way to achieve their goal is so random.
<br /><br/>
Before we discuss that further, ask yourself have you ever thought of being one of the greats? In whatever way it makes sense to you. Let me tell you, I have. It might sound ridiculous to the average person. But that’s one of the ongoing queries in my life for — as far as I can remember.
<br /><br/>
On surface level, there are only two pursuits to being one of the greats i.e. creative way and logical way. Usually referred to as, left brain and right brain. Don’t quote me on this but my guess would be that the tasks that come naturally to you and need the least effort to get into a flow state is your dominant brain. If you are a creative person, running a business with be painful for you. Because your decisions will be clouded by emotions rather than reasoning. And if you are a logical person, crashing a Boeing 747 into building and blowing it up for a scene will sound bonkers to you. 1
<br /><br/>
Your self-awareness and self-knowledge play an important role too. Because how are you going to be on top of the game if you do not even know the game. You have to know your strengths and weaknesses after years of trial and error. Which is famously known as passion. It does not come by scrolling Twitter and watching YouTube videos.
<br /><br/>
Since this is not Twitter, let’s talk about the nuance in this situation. You might think that a major inclination toward one part of the brain is the path to being great. Either let my emotions create some art or use reason and logic to seek the truth, right. But this could also lead to a disaster. You must have seen a person taking all decisions in life based on his emotions. He does not have control of his life. He cannot reason with himself to distinguish between what is good or bad. He is sleepwalking through his own life.
<br /><br/>
On other hand, person who is extremely driven by reasoning does not taste life. His eyes usually seem so dead. In order to find truth and logic in every single thing, he forgets to appreciate the beauty of it as it is. While interacting with other people, he cannot listen to what they feel. Rather he listens to what they think. Emotions are non-existent for him. A good example can be Sheldon Cooper from The Big Bang Theory.
<br /><br/>
Apparently, even being great requires balance.
<br /><br/>
As Tyler Hogge concludes in his <a href='https://tylerhogge.com/2015/10/07/whiplash-and-greatness/' target="_blank">blog</a> "Always happy; never satisfied", often being one of the greats is a deliberate and conscious decision. They tend to accept the sacrifices that come with that decision after recognizing their own strength and weaknesses. And anyone can be one of the greats!
</p>           
<br />
<br/>
            <p style={{color : "rgba(204, 238, 253, 0.884)"}}>April 2022</p>
        </div>
        </div>
    )
}
 
export default great;