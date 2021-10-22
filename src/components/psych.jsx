import React from 'react';
import { Link } from 'react-router-dom';


function Psych() {
    var objects = [
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
                {objects.forEach((elem)=>{
                    console.log(elem);
                    return(
                        <div>
                            <h6 className='strong'><strong>{elem.title}</strong></h6>
                            <p className='strong'>{elem.blurb}</p>
                            <h6 className='strong'><a href={elem.link}></a>{elem.link}</h6>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Psych