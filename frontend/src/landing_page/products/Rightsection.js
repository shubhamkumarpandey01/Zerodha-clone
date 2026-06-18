import React from 'react';

function Rightsection({imageURL, productName, ProductDesription, tryDemo, learnMore,googlePlay, appStore} ) {
    return ( 
        <div className="container mt-5"> 
        <div className="row">
        
        <div className="col-6 p-5 mt-5">
            <h1>{productName}</h1>
            <p>{ProductDesription}</p>
            <div>
            
            <a href={learnMore} style={{marginLeft: "50px"}}>Learn More</a>
            </div>
            
                </div> 
                <div className="col-6">
            <img src={imageURL} alt=""/>
            </div> 
        </div>
        </div>
    );
}

export default Rightsection;