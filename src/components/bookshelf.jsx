import React from 'react';
import './bookshelf.css';

export default function bookshelf(){
    return (
        <div className='container mt-5'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Bookshelf</li>
                </ol>
            </nav>
            <div className='content'>
            <h1>Bookshelf</h1>
            <p>Listing down all the books that I read, just to keep track and higlighted <span className='highlight'>must read Books</span></p>
            <h6 className='mt-5'>Reading...</h6>
            <ul>
                <li>
                    That will never work
                </li>
                <li>
                    The Hitchhiker's Guide to Galaxy
                </li>
            </ul>
            <h6>Books</h6>
            <ul>
                <li>Autobiography of yogi - Paramhansa Yogananda</li>
                <li>My experiments with truth - M.K. Gandhi</li>
                <li className='highlight'>Animal Farm - George Orwell </li>
                <li>Metamorphosis - Franz Kafka</li>
                <li>Deep Work - Cal Newport</li>
                <li className='highlight'>Think and grow rich - Napolean Hill</li>
                <li>Inner Engineering - Sadhguru</li>
                <li>Life's amazing secrets - Gaur Gopal Das</li>
                <li>Immortal talks 1 - Shunya</li>
                <li>Poor Economics - Esther Duflo & Abhijit Banarjee</li>
                <li>Pride & Prejudice - Jane Austen</li>
                <li>Fault in our stars - John Green</li>
                <li>Looking for Alaska - John Green</li>
                <li>The Slap - Christos Tsiolkas</li>
                <li>Be here now - Baba Ram Das</li>
                <li>Zero to One - Peter Thiel</li>
                <li>Monk who sold his Ferrari - Robin Sharma</li>
                <li>21 lessons for 21st Century - Yuval Noah Harari</li>
                <li className='highlight'>Man's search for meaning. - Victor Frankl</li>
                <li>The Lost Symbol - Dan Brown</li>
                <li>Sapiens - Yuval Noah Harari</li>
                <li>We are displaced -Malaya</li>
                <li>The Google Story - David Vice</li>
                <li>13 Reasons Why - Jay Asher</li>
                <li>Atomic Habits - James Clear</li>
                <li className='highlight'>The Selfish Gene - Richard Dawkins</li>
                <li>Brief Answers to the Big Questions - Stephen Hawkings</li>
                <li>Harry Potter and sorcerer's stone - J.K. Rowling</li>
                <li>Harry Potter and chamber of secrets- J.K. Rowling</li>
                <li>Harry Potter and Prisoner of Azkaban - J.K. Rowling</li>
                <li className='highlight'>Harry Potter and the Deathly Hallows - J.K. Rowling</li>
                <li>Bobby Fischer teaches Chess - Bobby Fischer</li>
                <li>The Silent Patient - Alex Michaelides</li>
                <li>For the love of physics - Walter Lewin</li>
                <li>The Psychology of Selling - Brian Tracy</li>
                <li className='highlight'>The Third Door - Alex Banayan</li>
                <li>12 Rules for Life - Jordan Peterson</li>
                <li>The Alchemist</li>
                <li>Five Point Someone</li>
                <li>3 Mistakes of my life</li>
                <li>Diary of a Wimpy Kid - The Third Wheel</li>
                <li>The Theory of everything</li>
                <li className='highlight'>Stev Jobs</li>
                <li>How to win friends & influence people</li>
                <li>How to top worrying and start living</li>
                <li className='highlight'>Elon Musk</li>
                <li>Who will cry when you die</li>
                <li>The Mastery Manual</li>                
                <li>The Power of Subconcious Mind</li>
                <li>...will add more if I get time or remember any</li>
            </ul>
        </div>
        </div>
    )
}