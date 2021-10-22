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
                {data.forEach((element) => {
                    console.log(element);
                    return(
                        <div>
                            <h1>Neeraj</h1>
                            <h6 className='strong'><strong>{element.title}</strong></h6>
                            <p className='strong'>{element.blurb}</p>
                            <h6 className='strong'><a href={element.link}></a>{element.link}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Psych