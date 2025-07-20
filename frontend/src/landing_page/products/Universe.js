import React from "react";
function Universe() {
  return (
    <div classNme="container mt-5 ">
      <div className="row text-center mt-5 ">
        <h1>The Zerodha Universe</h1>
        <p className="p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted p-4">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" height="50px" width="170px" alt="" />
          <p className="text-small text-muted p-4">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" height="50px" width="170px" alt="" />
          <p className="text-small text-muted p-4">Options trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/zerodhaFundhouse.png" height="50px" width="170px" alt="" />
          <p className="text-small text-muted p-4">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" alt="" />
          <p className="text-small text-muted p-4">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" height="50px" width="170px" alt="" />
          <p className="text-small text-muted p-4">Insurance</p>
        </div>
        <button className="p-2 btn btn-primary fs-5" style={{width:"17%",margin:"0 auto"}}>Sign up for free</button>
       
      </div>
    </div>
  );
}

export default Universe;
