import React from 'react';

function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className=" text-center ">People</h1>
            </div>
            <div className="row p-3 text-muted" style={{lineHeight:"1.8", fontSize: "1.2em"}}>
                <div className="col-6 p-3 text-center">
                    <img src="media/images/photo.jpeg" style={{borderRadius: "100%", width:"50%"}}/>
                    <h4 className="mt-2">Shubham Kr Pandey</h4>
                    <h6>Student of <b>GCET</b></h6>
                </div>
                <div className="col-6 p-3">
                    <p>Shubham Kumar Pandey is a third year student at <b>GALGOTIAS COLLEGE OF ENGINEERING AND TECHNOLOGY</b></p>
                    <p>Connect on <a href="https://www.linkedin.com/in/shubham-kumar-pandey-92aa25336">Linkedin</a> / <a href="">Trading</a> / <a href="https:twitter.com/pandey_shu10450">Twitter</a> / <a href="shubham_kumar_pandey_01">Instagram</a> / <a href="mailto:official.shubhamkumarpandey@gmail.com">Gmail</a></p>
            </div>
        </div> 
        </div>
    );
}

export default Team;