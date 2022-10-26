import React from 'react'
import { Line } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js'

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

function Chart() {
  const dataLine = {
    label: ['May 12', 'May 13', 'May 14'],
    dataset: [
      {
        data: [8, 7.8, 9],
      },
    ],
  }

  const options = {}
  return (
    <div>
      <Line data={dataLine} options={options} />
    </div>
  )
}

export default Chart
