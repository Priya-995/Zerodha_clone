
import React,{useState, useEffect} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders,setAllOrders]=useState([]);
    
    useEffect(() => {
      const API_URL = process.env.REACT_APP_API_URL || "http://localhost:10000";
      
      axios.get(`${API_URL}/getOrder`).then((res) => {
        
        setAllOrders(res.data);
      });
    }, []);

     if(!allOrders.length){
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
}
    return (
      <>
        <h3 className="title">Orders ({allOrders.length})</h3>
  
        <div className="order-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
             
              <th>Price</th>
              <th>Mode</th>
            </tr>
  
            {allOrders.map((stock, index) => {
             
  
              return (
                <tr key={index}>
                  
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  
                  <td>{stock.price.toFixed(2)}</td>
                  
                  <td>{stock.mode}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </>
    );
   
};

export default Orders;
