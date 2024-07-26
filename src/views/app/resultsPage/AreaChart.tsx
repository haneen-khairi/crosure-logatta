import Chart from "react-apexcharts";
import React from "react";

const AreaChart = React.memo(({ data }: { data: object }) => {
  const example = {
    options: {
      xaxis: {
        categories: Object.keys(data),
      },
    },
    series: [
      {
        name: "Stats",
        data: Object.values(data),
      },
    ],
  };

  return (
    <Chart
      options={example.options}
      series={example.series}
      type="area"
      width="100%"
    />
  );
});

export default AreaChart;
