import React, { useState } from "react";

function Brokerage() {
  const [activeSection, setActiveSection] = useState("Equity");
  return (
    <div className="container px-4 md:px-10 lg:px-20">
      <div className="flex-row  p-3  border-bottom">
        {["Equity", "Currency", "Commodity"].map((section) => (
          <button
            key={section}
            className={`fs-3 p-2 border-0 bg-transparent  ${
              activeSection == section
                ? "text-primary fw-bold"
                : "text-dark"
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>

      <div className="w-full overflow-auto p-5 ">
        {activeSection === "Equity" && (
          <div id="Equity" className="w-full">
            <table className="text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border  px-4 py-2"></th>
                  <th className="border  px-4 py-2">Equity Delivery</th>
                  <th className="border  px-4 py-2">Equity Intraday</th>
                  <th className="border  px-4 py-2">F&O - Futures</th>
                  <th className="border  px-4 py-2">F&O - Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border  px-4 py-2">Brokerage</td>
                  <td className="border  px-4 py-2">Zero Brokerage</td>
                  <td className="border  px-4 py-2">
                    0.03% or Rs. 20/executed order <br /> whichever is lower
                  </td>
                  <td className="border  px-4 py-2">
                    0.03% or Rs. 20/executed order <br /> whichever is lower
                  </td>
                  <td className="border px-4 py-2">
                    Flat Rs. 20 per executed order
                  </td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">STT/CTT</td>
                  <td className="border  px-4 py-2">0.1% on buy & sell</td>
                  <td className="border  px-4 py-2">0.025% on the sell side</td>
                  <td className="border  px-4 py-2">0.02% on the sell side</td>
                  <td className="border px-4 py-2">
                    0.125% of the intrinsic value on options that are bought and
                    exercised 0.1% on sell side (on premium)
                  </td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">Transaction charges</td>
                  <td className="border  px-4 py-2">
                    NSE: 0.00297% BSE: 0.00375%
                  </td>
                  <td className="border  px-4 py-2">
                    NSE: 0.00297% BSE: 0.00375%
                  </td>
                  <td className="border  px-4 py-2">NSE: 0.00173% BSE: 0</td>
                  <td className="border px-4 py-2">
                    NSE: 0.03503% (on premium) BSE: 0.0325% (on premium)
                  </td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">GST</td>
                  <td className="border  px-4 py-2">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="border  px-4 py-2">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="border  px-4 py-2">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="border px-4 py-2">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">SEBI charges</td>
                  <td className="border  px-4 py-2">₹10 / crore</td>
                  <td className="border  px-4 py-2">₹10 / crore</td>
                  <td className="border  px-4 py-2">₹10 / crore</td>
                  <td className="border px-4 py-2">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">Stamp charges</td>
                  <td className="border  px-4 py-2">
                    0.015% or ₹1500 / crore on buy side
                  </td>
                  <td className="border  px-4 py-2">
                    0.003% or ₹300 / crore on buy side
                  </td>
                  <td className="border  px-4 py-2">
                    0.002% or ₹200 / crore on buy side
                  </td>
                  <td className="border px-4 py-2">
                    0.003% or ₹300 / crore on buy side
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeSection === "Currency" && (
          <div id="Currency" className="w-full">
            <table className="text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border  px-4 py-2"></th>
                  <th className="border  px-4 py-2">Currency futures</th>
                  <th className="border  px-4 py-2">Currency options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border  px-4 py-2">Brokerage</td>
                  <td className="border  px-4 py-2">
                    0.03% or ₹ 20/executed order whichever is lower
                  </td>
                  <td className="border  px-4 py-2">₹ 20/executed order</td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">STT/CTT</td>
                  <td className="border  px-4 py-2">No STT</td>
                  <td className="border  px-4 py-2">No STT</td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">Transaction charges</td>
                  <td className="border  px-4 py-2">
                    NSE: 0.00035% BSE: 0.00045%
                  </td>
                  <td className="border  px-4 py-2">
                    NSE: 0.0311% BSE: 0.001%
                  </td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">GST</td>
                  <td className="border  px-4 py-2">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="border  px-4 py-2">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">SEBI charges</td>
                  <td className="border  px-4 py-2">₹10 / crore</td>
                  <td className="border  px-4 py-2">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">Stamp charges</td>
                  <td className="border  px-4 py-2">
                    0.0001% or ₹10 / crore on buy side
                  </td>
                  <td className="border  px-4 py-2">
                    0.0001% or ₹10 / crore on buy side
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeSection === "Commodity" && (
          <div id="Commodity" className="w-full">
            <table className="text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border  px-4 py-2"></th>
                  <th className="border  px-4 py-2">Commodity futures</th>
                  <th className="border  px-4 py-2">Commodity options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border  px-4 py-2">Brokerage</td>
                  <td className="border  px-4 py-2">
                    {" "}
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td className="border  px-4 py-2">₹ 20/executed order</td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">STT/CTT</td>
                  <td className="border  px-4 py-2">
                    0.01% on sell side (Non-Agri)
                  </td>
                  <td className="border  px-4 py-2">0.05% on sell side</td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">Transaction charges</td>
                  <td className="border  px-4 py-2">
                    MCX: 0.0021% NSE: 0.0001%
                  </td>
                  <td className="border  px-4 py-2">
                    MCX: 0.0418% NSE: 0.001%
                  </td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">GST</td>
                  <td className="border  px-4 py-2">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="border  px-4 py-2">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">SEBI charges</td>
                  <td className="border  px-4 py-2">
                    Agri: ₹1 / crore Non-agri: ₹10 / crore
                  </td>
                  <td className="border  px-4 py-2">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="border  px-4 py-2">Stamp charges</td>
                  <td className="border  px-4 py-2">
                    0.002% or ₹200 / crore on buy side
                  </td>
                  <td className="border  px-4 py-2">
                    0.003% or ₹300 / crore on buy side
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Brokerage;
