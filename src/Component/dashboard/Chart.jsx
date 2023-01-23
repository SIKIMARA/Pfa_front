import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Etudiant', 'Enseignant'],
  datasets: [
    {
      label: 'Nombre : ',
      data: [12, 19],
      backgroundColor: [
        '#6ec5eb',
        '#044689',
        
      ],
      
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return <Doughnut data={data} style={{maxHeight:"300px"}} />;
}
