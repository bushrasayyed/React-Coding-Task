import React, { useRef, useEffect } from "react";
import { Doughnut } from "react-chartjs-2"; 
import { Chart, ArcElement, Tooltip, Legend } from "chart.js"; 
import "./DonutChart.css";

Chart.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data }) => {
  const chartRef = useRef(null); 

  // Use useEffect to handle cleanup when data changes or component unmounts
  useEffect(() => {
    if (chartRef.current && chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }
  }, [data]); 

  const chartData = {
    labels: data?.pieChart?.map((item) => item.item) || [],  // Extract item names
    datasets: [
      {
        data: data?.pieChart?.map((item) => item.weight) || [],  // Extract weights
        backgroundColor: ["#1e3a8a", "#60a5fa", "#93c5fd",  "#d1d5db",  "#f3f4f6" ], 
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%', // Make the chart a donut by setting cutout to 70%
  };

  return (
    <div className="pie-chart">
     <h2>Top selling items</h2>
      <Doughnut ref={chartRef} data={chartData} options={options} />
      <div className="legend">
       
        {data?.pieChart?.map((item, index) => (
          <div key={index} className="legend-item">
            <span
              style={{
                backgroundColor: chartData.datasets[0].backgroundColor[index],
              }}
            ></span>
            <div>
              <strong>{item.item}</strong> - {item.weight} kg
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
