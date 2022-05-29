import React from 'react';
import { Link } from 'react-router-dom';

function anon(){
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
                <p></p>           
<br />
<br/>
            <p style={{color : "rgba(204, 238, 253, 0.884)"}}>April 2022</p>
        </div>
        </div>
    )
}
 
export default anon;