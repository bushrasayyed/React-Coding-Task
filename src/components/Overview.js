import React, { useState, useEffect } from 'react';
import LineGraph from './LineChart';  
import DonutChart from './DonutChart';   
import data from '../data.json';     
import './Overview.css'; 

const Overview = () => {
  const [selectedDate, setSelectedDate] = useState('2025-01-01'); 
  const [filteredData, setFilteredData] = useState(null); 

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
  };

  // Function to convert 'YYYY-MM-DD' to 'DD-MM-YYYY'
  const convertDateFormat = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}-${month}-${year}`; 
  };

  useEffect(() => {
    const formattedSelectedDate = convertDateFormat(selectedDate); // Convert selected date format to 'DD-MM-YYYY'
    
    // Find the matching data entry based on the formatted date
    const newData = data.find(item => item.date === formattedSelectedDate);
    setFilteredData(newData || null);
  }, [selectedDate]); // Re-run the effect whenever the selected date changes

  // Card data (only updated based on the selected date)
  const cardData = filteredData ? [
    { label: 'Total Sales', value: filteredData.total_sales },
    { label: 'Total Expenses', value: filteredData.total_expenses },
    { label: 'Net Profit', value: filteredData.net_profit },
    { label: 'Due Amount', value: filteredData.due_amount },
    { label: 'Payment Received', value: filteredData.payment_received },
  ] : [];

  return (
    <div className="overview-container">
      {/* Date Picker */}
      <div className="month-selector">
        <label htmlFor="date">Select Date: </label>
        <input
          type="date"
          id="date"
          value={selectedDate} // Value in YYYY-MM-DD format
          onChange={handleDateChange}
        />
      </div>

      {/* Overview Heading */}
      <h1>Overview</h1>

      {/* Cards Display */}
      <div className="cards-container">
        {cardData.length > 0 ? (
          cardData.map((card, index) => (
            <div
              className={`card ${index % 2 === 0 ? 'blue' : 'grey'}`}
              key={index}
            >
              <h3>{card.label}</h3>
              <p>{card.value}</p>
            </div>
          ))
        ) : (
          <p>No data available for the selected date.</p>
        )}
      </div>

      <div className="charts-container">
        <div className="line-graph-container">
          {filteredData && (
            <LineGraph
              customerRecords={filteredData.customer_records}
              supplierRecords={filteredData.supplier_records}
            />
          )}
        </div>
        <div className="pie-chart-container">
          {filteredData && filteredData.top_selling_products && (
            <DonutChart data={{ pieChart: filteredData.top_selling_products }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
