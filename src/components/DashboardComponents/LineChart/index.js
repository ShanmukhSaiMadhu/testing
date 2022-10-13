import React from "react";
import "./styles.js";
import { Line } from "react-chartjs-2";

function LineChart({ data, options }) {
  return (
    <div>
      <Line data={chartData} options={options} />;
    </div>
  );
}

export default LineChart;
