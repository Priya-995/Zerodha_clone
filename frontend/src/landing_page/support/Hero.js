import React from 'react';
function Hero() {
    return ( 
        <div className="container-fluid" id="supportHero">
            <div className=" p-5 " id="supportWrapper">
             <h4>Support Portal</h4>
             <a href="">Track Tickets</a>
            </div>
            <div className="row px-5 ">
             <div className="col-6 p-5">
                <h1 className="fs-4">Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder='Eg: how do i activate F&O, why is my order getting rejected ...'/>
                <br/>
                <a href="" className='mx-2'>Track account opening  </a>
                <a href="" className='mx-2'>Track segment activation  </a>
                <a href="" className='mx-2'>Intraday margins  </a><br/>
                <a href="" className='mx-2'>Kite user manual </a>
             </div>
             <div className="col-6 p-5">
                <h3>Featured</h3>
                <ol>
                    <li> <a href="" >Surveillance measure on scrips - March 2025 </a></li>
                    <li className='mt-3'>  <a href="" >Current Takeovers and Delisting – March 2025 </a></li>
                </ol>
               
               
             </div>
            </div>
        </div>
     );
}

export default Hero;