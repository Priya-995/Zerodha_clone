import React from "react";
function RaiseTicket() {
  return (
    <div className="container mt-5">
      <div className="row">
        <h4 className="text-secondary">
          To create a ticket, select a relevant topic
        </h4>
      </div>
      <div className="row">
        <div className="col-4 p-5 mt-5 ">
          <h5>
            <i className="fa fa-plus-circle m-2" aria-hidden="true"></i>Account
            Opening
          </h5>
          <div className="m-3">
            <a href=""> Resident individual</a>
            <br />
            <a href=""> Minor</a>
            <br />
            <a href=""> Non Resident Indian (NRI)</a>
            <br />
            <a href=""> Company, Partnership, HUF and LLP</a>
            <br />
            <a href=""> Glossary</a>
            <br />
          </div>
        </div>
        <div className="col-4 p-5 mt-5 ">
          <h5>
            <i className="fa-solid fa-user m-2 "></i>Your Zerodha Account
          </h5>
          <div className="m-3">
            <a href="">Your Profile</a>
            <br />
            <a href="">Account modification</a>
            <br />
            <a href="">
              Client Master Report (CMR) and Depository Participant (DP)
            </a>
            <br />
            <a href="">Nomination</a>
            <br />
            <a href="">Transfer and conversion of securities</a>
            <br />
          </div>
        </div>
        <div className="col-4 p-5 mt-5 ">
          <h5>
            <i className="fa-solid fa-chart-simple m-2"></i>Kite
          </h5>
          <div className="m-3">
            <a href="">IPO</a>
            <br />
            <a href="">Trading FAQs</a>
            <br />
            <a href="">Margin Trading Facility (MTF) and Margins</a>
            <br />
            <a href="">Charts and orders</a>
            <br />
            <a href="">Alerts and Nudges</a>
            <br />
            <a href="">General</a>
            <br />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 p-5 mt-5 mb-5">
          <h5>
          <i className="fas fa-credit-card m-2"></i>Funds
          </h5>
          <div className="m-3">
            <a href=""> Add money</a>
            <br />
            <a href=""> Withdraw money</a>
            <br />
            <a href=""> Add bank accounts</a>
            <br />
            <a href=""> eMandates</a>
            <br />
          </div>
        </div>
        <div className="col-4 p-5 mt-5 mb-5">
          <h5>
          <i className="fas fa-at m-2"></i>Console
          </h5>
          <div className="m-3">
            <a href="">Portfolio</a>
            <br />
            <a href="">Corporate actions</a>
            <br />
            <a href="">Funds statement</a>
            <br />
            <a href="">Reports</a>
            <br />
            <a href="">Profile</a>
            <br />
            <a href="">Segments</a>
            <br />
          </div>
        </div>
        <div className="col-4 p-5 mt-5 mb-5">
          <h5>
          <i className="fa-solid fa-coins m-2"></i>Coin
          </h5>
          <div className="m-3">
            <a href="">Understanding mutual funds and Coin</a>
            <br />
            <a href="">Coin app</a>
            <br />
            <a href="">Coin web</a>
            <br />
            <a href="">Transactions and reports</a>
            <br />
            <a href="">National Pension Scheme (NPS)</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RaiseTicket;
