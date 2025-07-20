import React from 'react';
function RightSection({imageURL, productName, productDescription,learnMore,googlePlay, appStore}) {
    return ( 
        <div classNme="container mt-3 mb-4 ">
            <div className="row mt-3" >
               
                <div className="col-2"></div>
                <div className="col-3 mt-5 pt-5">
                    <h1 className="mt-5">{productName}</h1>
                    <p className='fs-6'>{productDescription}
                    </p>
                    <div className='mb-4'>
                    
                    <a href={learnMore}>Learn More →</a>
                    </div>
                

                </div>
                <div className="col-1"></div>
               <div className="col-4 ">
                    <img src={imageURL} alt="" />
                </div>
            </div>
            

            
        </div>
     );
}

export default RightSection;