import React from "react";
import OverviewCards from "./Overview";
import "./Dashboard.css";

const Dashboard = () => {

 
  return (
    <div className="dashboard">
     
      {/* Main content */}
      <div className="content">
        {/* Overview Cards */}
        <OverviewCards />
        {/* Payment Table */}
        {/* <PaymentTable /> */}
      </div>
    </div>
  );
};

export default Dashboard;
