import React from 'react';
function Pricing() {
    return ( 
        <div className="container">
            <div className="row mt-5">
                <div className="col-4">
                    <h1 className="mb-3 mt-5">Unbeatable Price</h1>
                    <p>We pioneered the concept of discount broking and price
                    transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className="mx-4" style={{textDecoration:"none"}}>See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col border p-5 text-center">
                        <h1>₹0</h1>
                        <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col border p-5 text-center">
                        <h1>₹20</h1>
                        <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Pricing;