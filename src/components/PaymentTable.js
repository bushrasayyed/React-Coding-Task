import React from "react";
import "./PaymentTable.css";

const PaymentTable = ({ data }) => {
  const rows = data?.table || [];

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
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.recordNo}</td>
              <td>{row.farmerName}</td>
              <td>{row.netAmount}</td>
              <td>{row.paidAmount}</td>
              <td>{row.dueAmount}</td>
              <td>{row.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentTable;
