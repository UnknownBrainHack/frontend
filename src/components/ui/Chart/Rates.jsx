import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function Rates() {
  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [
      {
        label: '≈ ETH',
        data: [65, 59, 80, 81, 56, 55, 40,32],
        backgroundColor: '#E9F2FF',
        borderRadius: 8,
        hoverBackgroundColor: '#0166FF',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        xAlign: 'center',
        yAlign: 'bottom',
        backgroundColor: '#0166FF',
        titleFont: { weight: 'bold' },
        titleAlign: 'center',
        caretPadding: 10,
        caretSize: 7,
        cornerRadius: 10,
        displayColors: false,
      },
    },
    scales: {
      x: {
        beginAtZero: false,
        title: {
          align: 'start',
          color: '#A4A3A3',
          display: true,
          text: 'June',
          font: {
            weight: 'bold',
            size: 18,
          },
        },
        grid: {
          color: 'transparent',
          borderColor: 'transparent',
        },
      },
      y: {
        grid: {
          color: 'transparent',
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
}
