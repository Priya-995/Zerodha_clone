import React from 'react';
function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore,googlePlay, appStore}) {
    return ( 
        <div classNme="container ">
            <div className="row mt-3" >
               <div className="col-2"></div>
                <div className="col-4">
                    <img src={imageURL} alt="" />
                </div>
                <div className="col-1"></div>
                <div className="col-3 mt-5">
                    <h1 className="mb-4">{productName}</h1>
                    <p className='fs-6'>{productDescription}
                    </p>
                    <div className='mb-4'>
                    <a href={tryDemo} style={{marginRight:"5em"}}>Try Demo →</a>
                    <a href={learnMore}>Learn More →</a>
                    </div>
                    <div>
                    <a href={googlePlay} style={{marginRight:"2em"}}><img src="media/images/googlePlayBadge.svg"></img></a>
                    <a href={appStore}><img src="media/images/appStoreBadge.svg"></img></a>
                    </div>
                   <div className="col-2"></div>

                </div>
            </div>
            

            
        </div>
     );
}

export default LeftSection;