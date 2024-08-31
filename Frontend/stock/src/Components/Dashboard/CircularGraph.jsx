import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CircularGraph = ({ successCount, errorCount }) => {
  const data = {
    labels: ['Success', 'Vulnerability'],
    datasets: [
      {
        data: [successCount, errorCount],
        backgroundColor: ['green', 'red'],
        hoverBackgroundColor: ['#28a745', '#dc3545'],
      },
    ],
  };

  return (
    <div style={{ width: '300px', height: '300px', marginLeft: '20px' }}>
      <Doughnut data={data} />
    </div>
  );
};

export default CircularGraph;
