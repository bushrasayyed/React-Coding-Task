import React from "react";
import "./PaymentTable.css";

const PaymentTable = ({ data }) => {
  const rows = data || [];

  return (
    <div className="payment-table">
      <h3>Recent Supplier Payments</h3>
      <table>
        <thead>
          <tr>
            <th>Record No</th>
            <th>Farmer Name</th>
            <th>Net Amount</th>
            <th>Paid Amount</th>
            <th>Due Amount</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows.map((row, index) => (
              <tr key={index}>
                <td>{row.record_no}</td>
                <td>{row.farmer_name}</td>
                <td>{row.net_amount}</td>
                <td>{row.paid_amount}</td>
                <td>{row.due_amount}</td>
                <td>{row.payment_status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No recent payments available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
