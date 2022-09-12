import React from 'react';
import { Link } from 'react-router-dom';

function language(){
    return (
        <div className='container mx-auto text-start mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to='/essays'>Essays</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Thoughts on Language </li>
                </ol>
            </nav>
            <div className='content-div'>
                <span className="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-placement="right"data-bs-trigger="hover focus" data-bs-content="10 June 2022">
                    <h1 className='heading strong bold'>Thoughts on Language</h1>
                </span>
                <p>
                
                Arrival is based on a hypothesis called the Sapir-Whorf hypothesis. It states that a person’s language directly influences their perception of the world. Also known as linguistic relativity. 
                <br />
<br />

This means that depending on the language you know, your experience will differ. Absurd, isn’t it? 
<br />
<br />

One of those experiences would be a dream. Like, do different languages have different ratios of nightmares to normal dreams? Do people speaking Hebrew get more nightmares than people speaking Arabic?
<br />
<br />

Along the lines of these thoughts, Arrival plays with one of our most complicated experiences: time. It proposes that our perception of time can be altered depending upon the language we know. Basically, you can know the future by learning a language. 
<br />
<br />

One might ask: did our perception of reality change when we learned the language of computers? Well, it’s quite an interesting question if you actually think about it. Now we have our digital and ‘real’ life so intertwined that very little difference is left between the two. 
<br />
<br />

Dreams that you and I experience in sleep are quite the same as the ones the protagonist experiences. But she was a little more aware. She had activated senses (she could remember what she heard from a Chinese general). Well, we all know a similar phenomenon called lucid dreaming: 
<br />
<br />

A lucid dream is a type of dream in which the dreamer becomes aware that they are dreaming. During a lucid dream, the dreamer may gain some amount of control over the dream characters, narrative, or environment; however, this is not actually necessary for a dream to be described as lucid.
<br />
<br />

So, can we say that we already know a certain language that lets us experience dreams to a certain extent? We can ‘see’ things in a dream. But cannot activate our other senses because of language limitations and lucid dreaming is an outlier experience. 
<br />
<br />

Also because, you see, it’s quite obvious that our language is limited. Oftentimes, our words fail us. We become incapable of finding words to convey an experience. Some intricacies of an experience are just impossible to explain in words, for example, psychedelics. Language limits us. You might have seen creative people be physically uncomfortable if they cannot express something. They hunch, compress their body, close their eyes, and rub their head just to get words to say what they want to say. 
<br />
<br />

Language and experience are linked. But also to experience sunset you don't necessarily have to know it’s a sunset. Still, if you don’t have a set of vocabulary in your pocket, how are you going to tell your friend about that beautiful sunset? Forget nature, we can’t even express most emotions in words. Once in a while, someone does that and we start calling them “artists”.
<br />
<br />

Humans are even capable of learning more than one language. Also known as polyglots. From my experience and talking with other polyglots, I think it hinders your mental capacity on some levels while giving you an edge over others on some things. Also, if you observe, your language of thought will depend upon the topic. Ever noticed someone just switching from Hindi to English when they are angry? It’s so fascinating that our emotions can even dictate the language that we think and speak.  
<br />
<br />

If you think about it, on the most superficial level, language is the only thing differentiating us from other animals. We know ants communicate with each other. Birds do too to find mates etc. But there is no connecting bridge between them and us.
<br />
<br />

Now, I am aware that this school of thought is not much appreciated in the linguistic community. Because of lack of research and evidence. Most people rather agree with the Chomskyan school, which holds the belief that linguistic structures are innate. That language is one of the biological presets in the human mind. And is genetically inherited.
<br />
<br />

These were just some of the thoughts I had after watching Arrival some time back. They may not be scientifically accurate (they are not), but I just wanted to share this as a little thought experiment. Happy to discuss it with y’all!
</p>
                <br />
            <br />
            <br />
            <p style={{color : "rgba(204, 238, 253, 0.884)"}}>June 2022</p>
            </div>
        </div>
    )
}

export default language;
