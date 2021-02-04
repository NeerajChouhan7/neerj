import React from 'react';
import './essay.css';
import { Link } from 'react-router-dom';
function cinema(){
    return (
        <div className='essay-container'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page"><Link to='/essays'>Essays</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Stories</li>
                </ol>
            </nav>
            <div className='content-div'>
                <h1 className='heading'>Stories</h1>
                <p>
                "Cinema is not an art", my English teacher once said to me. And people still ask me why I am skeptical about the Indian education system. There is no way of understanding your reality better than art. After books, movies are the best way to learn about life without bearing the pain of it. I feel like I am on a psychedelic trip when I am experiencing a good story. I never had that experience but surely it will be very good storytelling. 
<br /><br />
Good storytelling will make you not question its authenticity. From love to gang rivalries, dragons to time travel, the 17th century to 2050. Good storytelling can give you an experience of all of that. It is very fascinating to me that it is nothing but stories that makes identity. No wonder why people can take lives if the story they were told was a lie or questioned. At the end of the day, humans make sense of reality in stories.
<br /><br />
The true essence of filmmaking as an art has been lost in the mainstream cinema of our country. It will take years for the narration of stories to be mainstream in our country. In terms of business, this industry has been one of the most successful industries. So successful that few people who are not even in the political authority can directly influence the lives of millions.
<br /><br />
I just love to watch cinema. It is a wormhole to a parallel universe. If you have confusion of getting into film-making like I once had. In a course on film-making by Martin Scorsese, he says, "If you feel you can't rest until you have told this particular story, then I would be talking to you". I got my answer, maybe you too.
                </p>
            </div>
        </div>
    )
}

export default cinema;
