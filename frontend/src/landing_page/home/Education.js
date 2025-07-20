import React from 'react';
function Education() {
    return (
      <div className="container">
      <div className="row mt-5">
        <div className="col-6">
                <img src="media/images/education.svg" alt="" style={{width:"90%"}}/>
            </div>
         
            <div className="col-6">
              <h2 className="fs-2 mb-5 mt-5">Free and open market education</h2>
              <p className="mb-4">Varsity, the largest online Stock market education book in the world <br></br>
              covering everything from the basics to advanced trading.</p>
              <a href="" className="" style={{textDecoration:"none"}}>Versity <i className="fa-solid fa-arrow-right"></i></a>
             
              <p className="mb-4 mt-5">TradingQ&A, the most active trading and investment community in <br></br>
              India for all your market related queries.</p>
              <a href="" className="" style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
              

          </div>
      </div>

  </div>
      );
}

export default Education;