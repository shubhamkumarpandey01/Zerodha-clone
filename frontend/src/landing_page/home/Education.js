import React from 'react';

function Education () {
    return (
        <div className='container mb-5'>
          <div className='row'>
            <div className='col-6'>
              <img src='media/images/education.svg' style={{width:"60%"}}/>
            </div>
            <div className='col-6'>
              <h1 className='mb-3 fs-2'>Free and open market education</h1>
              <p> Varsity,the largest online stock market education book in the world coverying everything from the basics to advance trading.</p>
              <a href=''className='mt-5' style={{textDecoration: "none"}}>Versity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
              <p className='mt-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
              <a href=''className='mt-5' style={{textDecoration: "none"}}>Trading Q&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      );
}

export default Education;