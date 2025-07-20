import React from 'react';
function Signup() {
    return ( 
        <div>
            <h1 className='text-center mt-4 pt-5 text-muted '>Open a free demat and trading account online</h1>
            <h4 className='text-center  text-muted '>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h4>
            <div className='row'>
            <div className="col-6">
              <img src="media/images/account_open.svg"/>
            </div>
             <div className="col-6">
                <h2>Signup now</h2>
                <p>Or track your existing application</p>
                <input type="number"></input>
             </div>
             </div>

        </div>
     );
}

export default Signup;