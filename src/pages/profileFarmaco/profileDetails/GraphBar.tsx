import React from "react";
import { Bar } from "react-chartjs-2";
import * as sc from "./styles";

const GraphBar = () => {
  const labels = [
    "Acetaminofen",
    "Gripex",
    "Acetaminofen",
    "Gripex",
    "Acetaminofen",
    "Gripex",
  ];
  return (
    <sc.GraphContainer>
      <label>Dispositivos</label>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "",
              data: [
                [2, 4],
                [4, 7],
                [8, 12],
                [15, 25],
                [5, 16],
                [1, 31],
              ],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
              ],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          indexAxis: "y",
          //@ts-ignore
          maxBarThickness: 30,
          borderRadius: 6,
          legend: {
            display: false,
          },
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              position: "top",
            },
          },
        }}
      ></Bar>
    </sc.GraphContainer>
  );
};

export default GraphBar;
