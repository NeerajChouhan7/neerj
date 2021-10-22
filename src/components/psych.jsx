import React from 'react';
import { Link } from 'react-router-dom';


function Psych() {
    var data = [
        {
            title: "Conditioning", 
            blurb: "Pavlov's conditioning experiment. This experiment played a huge role in understanding how learning happens as well as in the development of the school of behavioral psychology. Although it was discovered by accident, still it led to the discovery of classical conditioning.", 
            link: "https://www.verywellmind.com/pavlovs-dogs-2794989"
        },
        {
            title:'',
            blurb: '',
            link: ''
        }
    ]
    return(
        <div className='container text-start mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Psych</li>
                </ol>
            </nav>
            <div>
                <p>This is the archive of the whatsapp newsletter on psychology called Psych, running by yours truly. Click <a href='https://api.whatsapp.com/send/?phone=917247796922&text=Hey,+I+got+to+know+about+Psych.+I+would+love+to+be+part+of+it!&app_absent=0'>here</a> to be part of it. </p>
                <div>
                    <h5>Conditioning</h5>
                    <p>
                        Pavlov's conditioning experiment. This experiment played a huge role in understanding how learning happens as well as in the development of the school of behavioral psychology. Although it was discovered by accident, still it led to the discovery of classical conditioning:
                    <a href='https://www.verywellmind.com/pavlovs-dogs-2794989'> https://www.verywellmind.com/pavlovs-dogs-2794989</a>
                    </p>                    
                    <hr/>
                    <h5>Conciousness</h5>
                    <p>Three levels of conciousness: <a href='https://medium.com/achology/the-three-levels-of-human-consciousness-6d9a59fed577'>https://medium.com/achology/the-three-levels-of-human-consciousness</a></p>
                    <p>States of consciousness with respect to awareness. And the role of consciousness in depressants, hypnosis, etc. <a href='https://openpress.usask.ca/introductiontopsychology/chapter/states-of-consciousness/'>https://openpress.usask.ca/introductiontopsychology/chapter/states-of-consciousness/</a></p>
                    <p>What is Consciousness? It’s types, uses & history in short: <a href='https://www.verywellmind.com/what-is-consciousness-2795922#:~:text=Consciousness%20refers%20to%20your%20individual,subjective%20and%20unique%20to%20you'> https://www.verywellmind.com/what-is-consciousness</a></p>
                    <p>If you prefer video - <a href='https://youtu.be/jReX7qKU2yc'>https://youtu.be/jReX7qKU2yc</a></p>
                    <p>Ever wondered why do we celebrate new year? <a href='https://www.psychologytoday.com/us/blog/how-risky-is-it-really/201312/why-we-really-celebrate-new-years-day'> https://www.psychologytoday.com/us/blog/how-risky-is-it-really/201312/why-we-really-celebrate-new-years-day</a></p>
                    <hr/>
                    <h5>Attention</h5>
                    <p>What is Attention: <a href='https://www.verywellmind.com/what-is-attention-2795009'>https://www.verywellmind.com/what-is-attention-2795009</a></p>
                    
                    <p>Does Social Media affect attention span permanently? Short Answer: No. Full answer: <a href='https://www.forbes.com/sites/quora/2019/11/20/does-using-social-media-really-affect-your-attention-span/?sh=219b93eb1a57'>https://www.forbes.com/sites/quora/2019/11/20/does-using-social-media-really-affect-your-attention-span/?sh=219b93eb1a57</a></p>
                    <p>Bursting the myth that humans have a shorter attention span than goldfish: <a href="https://www.bbc.com/news/health-38896790#:~:text=You%20probably%20won't%20get%20to%20the%20end%20of%20this%20article.&text=They%20say%20that%20the%20average,span%20of%20your%20average%20goldfish">https://www.bbc.com/news/health-38896790#:~:text=You%20probably</a></p>
                    <hr/>
                    <h5>Perception</h5>
                    <p>What is perception? <a href='https://www.cognifit.com/perception'>https://www.cognifit.com/perception</a></p>
                    
                    <p>
                    Roll of senses in perception: <a href='https://openpress.usask.ca/introductiontopsychology/chapter/we-experience-our-world-through-sensation/'>https://openpress.usask.ca/introductiontopsychology/chapter/we-experience-our-world-through-sensation/</a></p>
                    <p>McGurk Effect & Inaccuracy in sense perception: <a href='https://openpress.usask.ca/introductiontopsychology/chapter/accuracy-and-inaccuracy-in-perception/'>https://openpress.usask.ca/introductiontopsychology/chapter/accuracy-and-inaccuracy-in-perception/</a></p>
                    <p>We’ve been taught that we have only 5 senses, but that’s not completely true. We have more senses than 5 and even if you already knew that, check out what the other senses are. Video By British Philosopher Barry C Smith: <a href='https://youtu.be/zWdfpwCghIw'>https://youtu.be/zWdfpwCghIw</a></p>

                    <hr/>
                    <h5>Language</h5>
                    <p>What is language and understanding components of the Language: <a href='https://opentext.wsu.edu/psych105/chapter/7-3-language/'>https://opentext.wsu.edu/psych105/chapter/7-3-language/</a></p>
                    <p>Understand role of language in Culture: <a href='https://www.britannica.com/topic/language/Language-and-culture#ref27180'>https://www.britannica.com/topic/language/Language-and-culture#ref27180</a></p>
                    <p>A podcast of a psychologist and behaviorist who tried to teach language to a chimo, currently Professor at Columbia University where he talks about the evolution of language, future of it, etc: <a href='https://open.spotify.com/episode/1EBVLytUaLxLwTk2IfMQo7?si=5SxwYSM6R0qwoVwAC7J5_w'>https://open.spotify.com/episode/1EBVLytUaLxLwTk2IfMQo7?si=5SxwYSM6R0qwoVwAC7J5_w</a></p>
                    <p>Figuring out the origins of language in evolution's biggest mystery and we still cannot find it out. Even so that once the Linguistic Society of Paris banned the discussion on this topic: <a href='https://www.languageinsight.com/blog/2019/the-origin-of-language-evolutions-greatest-mystery/'>https://www.languageinsight.com/blog/2019/the-origin-of-language-evolutions-greatest-mystery/</a></p>
                    <p>Short article on who's Noam Chomsky also know as the father of modern linguistics & what is his theory of language origin: <a href='https://blog.mangolanguages.com/noam-chomsky-his-contribution-to-linguistics/'>https://blog.mangolanguages.com/noam-chomsky-his-contribution-to-linguistics/</a></p>
                    <hr/>
                    <h5>Psychology behind different social media applications</h5>
                    <p>TikTok: <a href='https://growth.design/case-studies/tiktok-feed-psychology/'>https://growth.design/case-studies/tiktok-feed-psychology/</a></p>
                    <p>Snapchat 1. <a href='https://medium.com/svilenk/the-neuroscience-behind-the-success-of-snapchats-stories-effa1311214f'>https://medium.com/svilenk/the-neuroscience-behind-the-success-of-snapchats-stories-effa1311214f</a></p>
                    <p>2. <a href='https://www.nirandfar.com/psychology-of-snapchat/'>https://www.nirandfar.com/psychology-of-snapchat/</a></p>
                    <p>Instagram: <a href='https://blog.wolfmillionaire.com/psychology-behind-instagram-post/'>https://blog.wolfmillionaire.com/psychology-behind-instagram-post/</a></p>
                    <p>Netflix: <a href='https://thenextweb.com/syndication/2019/12/09/how-netflix-uses-psychology-to-perfect-their-customer-experience/'></a></p>
                    <p>An interesting short read on how Netflix uses Font Psychology to convey a story: <a href='https://www.mentalfloss.com/article/538750/how-netflix-taps-font-psychology-tell-story-and-find-its-audience'>https://www.mentalfloss.com/article/538750/how-netflix-taps-font-psychology-tell-story-and-find-its-audience</a></p>
                    <p>Interesting read on Netflix using psychology to enhance their customer experience. By making the onboarding process smooth and making sure immediate engagement after signing up.<a href='https://thenextweb.com/syndication/2019/12/09/how-netflix-uses-psychology-to-perfect-their-customer-experience/'>https://thenextweb.com/syndication/2019/12/09/how-netflix-uses-psychology-to-perfect-their-customer-experience/</a></p>
                    <hr/>
                    <h5>Psychological experiments</h5>
                    <p>8 Interesting psychology experiments, with short summaries of each one: <a href='https://www.verywellmind.com/interesting-social-psychology-experiments-2795916'>https://www.verywellmind.com/interesting-social-psychology-experiments-2795916</a></p>
                    <p>Experiments that have happened in the past, but are unethical now. Some are really dark ones, including the famous Stanford Prison Experiment: <a href='https://youtu.be/zZ3l1jgmYrY'>https://youtu.be/zZ3l1jgmYrY</a></p>
                    <p>Why do we obey Authority? With Milgram's experiment in psychology,understand why we follow, respect, or obey dominance. And is it necessary to do or not: </p><a href='https://youtu.be/JXXbIF5Okjc'>https://youtu.be/JXXbIF5Okjc</a>
                    <hr/>
        <h5>Nature vs Nurture</h5>
        Let us establish what do nature and nurture mean in our context. Nature is how your genes affect your behavior & personality traits in your life. It is more on the biological aspect of life. Nurture can be called a product of your exposure, experience, and learnings. 
<br/>
<br/>
The debate is regarding whether an individual's personality traits & abilities are in born or it comes through experience i.e. it is by nature or nurture. There are obvious sets of characteristics in an individual to divide into both of these. For example color of hair, eyes are hereditary in progeny. But if you are completely healthy then your communications skills are solely based on nurture.
<br/>
<br/>
The psychological traits and development of a human being are shaped by a balance of genetic influence and experience in life. Because there are too many facts on both of these extremes. It is widely accepted that both genes & environment do not act independently on an individual. But they interact with each other in a very complex manner in development.
<br/>
<br/>
                         <hr/>                                                                                                                   - Neeraj
                    <h5>Signaling</h5>
                    <p>A short fun video on Virtue Signalling on Social Media: <a href='https://youtu.be/ohm9C4u63qk'>https://youtu.be/ohm9C4u63qk</a></p>
                    <p>Sometimes Virtue Signalling can be a powerful tool, as a business or a personal brand: <a href='https://www.psychologicalscience.org/news/dont-be-afraid-to-virtue-signal-it-can-be-a-powerful-tool-to-change-peoples-minds.html'>https://www.psychologicalscience.org/news/dont-be-afraid-to-virtue-signal-it-can-be-a-powerful-tool-to-change-peoples-minds.html</a></p>
                    <p>Very interesting read on signals, and countersignals: <a href='https://www.robkhenderson.com/past-newsletter/countersignals'>https://www.robkhenderson.com/past-newsletter/countersignals</a></p>
                    <p>Interesting neuroscientific and psychological take to deal with anger: <a href='https://thinkingbat.substack.com/p/tame-the-beast'>https://thinkingbat.substack.com/p/tame-the-beast</a></p>
                    <p>Studying Phineas Gage has been quite an important part of neurology and psychology. Here is a short video, explaining why his incident was so interesting and memorable. Apparently, there is also a  movie on him: <a href='https://youtu.be/vb8Jg1PAL90'>https://youtu.be/vb8Jg1PAL90</a></p>
                    <hr></hr>
                    <h5 id='music-essay'>Could listening to lots of music in your teenage save you from drugs?</h5>
                    <br/>
                    <p>
                    Nature is chaos, music is audible order. The way our brain makes this into order is more complex and interesting than you could have possibly imagined. Whenever you listen to a song, your auditory cortex converts rhythms, melodies, and harmonies into a sensible piece. Then our reaction to the music depends upon how we interact with it. Singing it in your head, activates your premotor cortex, responsible for movements. Dance with it and your neurons will be in sync with the beats of the music. Pay attention to the lyrics and you'll activate your parietal cortex, which helps you maintain attention to different stimuli. Listening to a song that triggers personal memories? Your prefrontal cortex, which maintains personal life and relationships information, will spring into action. 
<br/>
<br/>
Brain imagining studies have shown that the more we like a song, the more we get treated with neurochemical bliss in our brain. Flooding us with similar chemical, cocaine gives. Don't worry that doesn't mean it is harmful. Interestingly, between the age of 12 to 22, our brains undergo neaurological development — the music we love during that time gets wired into our system for good. When our brain connected heightened emotion of young age to those songs, creating a stronger memory. Furthermore, with the help of puberty growth hormones, our brain label these memories as incredibly important ones.
<br/>
<br/>
Author of This Is Your Brain on Music: The Science of a Human Obsession Daniel Levitin, notes that the music of our teenage years is connected with our social lives, too. “We are discovering music on our own for the first time when we’re young,” he said, “often through our friends. We listen to the music they listen to as a badge, as a way of belonging to a certain social group. That melds the music to our sense of identity.”
<br/>
<br/>
Another reason why these memories stick with you, for the rest of your life is that you become *you*  in the period between ages of 12 to 22. They become an integral part of your sense of self. Firstly, some songs become attached to what we were feeling at that time. The music playing while your first love, achievement, friendship, etc. gets attached to that bad or beautiful memory. On the other hand, some songs become a memory in and of themselves. You may still remember the first time you heard that particular song. The eerieness you have to hear some songs for the first time again, right. I feel ya :)
<br/>
<br/>
P.S. This is written by <a href='https://twitter.com/_neerajchouhan'>yours truly</a>, inspired by neural nostalgia by Mark Joseph Stern
                    </p>
                    <br/>
                    <br/>
                    <p>Thank you if you are still here. I'll make sure to add more meaningful links here as I go :)</p>
{/* 
<p></p><a href=''></a><br/>
<p></p><a href=''></a><br/> */}
                </div>
                {/* {data.forEach((element) => {
                    console.log(element);
                    return(
                        <div>
                            <h1>Neeraj</h1>
                            <h5 className='strong'><strong>{element.title}</strong></h5>
                            <p className='strong'>{element.blurb}</p>
                            <h5 className='strong'><a href={element.link}></a>{element.link}</h5>
                        </div>
                    )
                })} */}
            </div>
        </div>
    )
}

export default Psych
