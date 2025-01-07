import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"; 
import "./LineChart.css";


Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = ({ customerRecords, supplierRecords }) => {
  const chartRef = useRef(null); 

  // Use useEffect to handle cleanup when data changes or component unmounts
  useEffect(() => {
    // Check if the chart is already initialized and destroy it if necessary
    if (chartRef.current && chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }
  }, [customerRecords, supplierRecords]); 

  const chartData = {
    labels: supplierRecords?.map(record => record.month) || [], // X-axis: Months
    datasets: [
      {
        label: "Supplier Records",
        data: supplierRecords?.map(record => record.bags) || [], // Y-axis: Bags (for supplier)
        borderColor: "#000000", // Black color for supplier line
        backgroundColor: "rgba(0, 0, 0, 0.1)", // Black shade for background
        tension: 0.4,
        borderDash: [5, 5], // Dashed line for supplier records
        pointRadius: 0, // No dots on the line
      },
      {
        label: "Customer Records",
        data: customerRecords?.map(record => record.bags) || [], // Y-axis: Bags (for customer)
        borderColor: "#1e3a8a", // Blue color for customer line
        backgroundColor: "rgba(30, 58, 138, 0.1)", // Blue shade for background
        tension: 0.4,
        borderDash: [], // Solid line for customer records
        pointRadius: 0, // No dots on the line
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom", // Position the legend below the chart
        labels: {
          usePointStyle: true, // Use dots instead of squares for legend
          pointStyle: "circle", // Dots for legend items
          padding: 20, // Add padding between legend items
          color: (context) => {
            // Change the color of the labels based on the dataset
            return context.datasetIndex === 0 ? "#000000" : "#1e3a8a"; // Black for Supplier, Blue for Customer
          },
        },
      },
    },
    scales: {
      x: {
        grid: { display: false }, // Hide x-axis grid
      },
      y: {
        grid: { color: "#e5e7eb" }, // Light grey grid lines for y-axis
        ticks: {
          callback: function (value) {
            return value / 1000 + "k"; // Format y-axis labels as "k" (e.g., 10k)
          },
        },
      },
    },
  };

  return (
    <div className="line-chart">
      {/* Pass the ref to the Line component */}
      <Line ref={chartRef} data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
