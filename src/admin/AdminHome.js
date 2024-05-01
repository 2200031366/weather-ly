import React from 'react';
import { Pie } from 'react-chartjs-2';
import './admin.css'
import '../main/navbar.css'
import '../config'

const AdminHome = () => {
  // Sample data for demonstration
  const feedbackCount = 50;
  const userCount = 100;

  // Pie chart data
  const chartData = {
    labels: ['Feedbacks', 'Users'],
    datasets: [
      {
        label: 'Data',
        data: [feedbackCount, userCount],
        backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="admin-home">
      <h1>Welcome Admin!</h1>
      <div className="chart-item">
        <h2>Statistics</h2>
        <Pie data={chartData} className="chart-item" />
      </div>
    </div>
  );
};

export default AdminHome;
