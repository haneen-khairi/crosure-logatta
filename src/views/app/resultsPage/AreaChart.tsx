import Chart from "react-apexcharts";
import React from "react";

const AreaChart = React.memo(({ data, type }: { data: any, type: string }) => {
 

  // const dataArray: any[] = [
  //   {
  //       "type": "Chimney fire",
  //       "stats": [
  //           {
  //               "year": 2010,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2011,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2012,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2013,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2014,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2015,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2016,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2017,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2018,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2019,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2020,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2021,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2022,
  //               "incidents_count": 0
  //           }
  //       ]
  //   },
  //   {
  //       "type": "Secondary Fire - accidental",
  //       "stats": [
  //           {
  //               "year": 2010,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2011,
  //               "incidents_count": 2
  //           },
  //           {
  //               "year": 2012,
  //               "incidents_count": 2
  //           },
  //           {
  //               "year": 2013,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2014,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2015,
  //               "incidents_count": 3
  //           },
  //           {
  //               "year": 2016,
  //               "incidents_count": 3
  //           },
  //           {
  //               "year": 2017,
  //               "incidents_count": 2
  //           },
  //           {
  //               "year": 2018,
  //               "incidents_count": 2
  //           },
  //           {
  //               "year": 2019,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2020,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2021,
  //               "incidents_count": 0
  //           },
  //           {
  //               "year": 2022,
  //               "incidents_count": 4
  //           }
  //       ]
  //   },
  //   {
  //     "type": "Secondary Fire",
  //     "stats": [
  //         {
  //             "year": 2010,
  //             "incidents_count": 0
  //         },
  //         {
  //             "year": 2011,
  //             "incidents_count": 2
  //         },
  //         {
  //             "year": 2012,
  //             "incidents_count": 2
  //         },
  //         {
  //             "year": 2013,
  //             "incidents_count": 0
  //         },
  //         {
  //             "year": 2014,
  //             "incidents_count": 0
  //         },
  //         {
  //             "year": 2015,
  //             "incidents_count": 3
  //         },
  //         {
  //             "year": 2016,
  //             "incidents_count": 3
  //         },
  //         {
  //             "year": 2017,
  //             "incidents_count": 2
  //         },
  //         {
  //             "year": 2018,
  //             "incidents_count": 2
  //         },
  //         {
  //             "year": 2019,
  //             "incidents_count": 0
  //         },
  //         {
  //             "year": 2020,
  //             "incidents_count": 6
  //         },
  //         {
  //             "year": 2021,
  //             "incidents_count": 5
  //         },
  //         {
  //             "year": 2022,
  //             "incidents_count": 4
  //         }
  //     ]
  //   }
  // ]
  // if(data[0].type !== undefined){
    

  //   function transformData(inputData: any) {
  //     const categories: any[] = [];
  //     const series: any[] = [];
  
  //     // Assuming the years are the same for all types, we can use the first type to get the years
  //     inputData[0]?.stats?.forEach((stat: any) => {
  //         categories.push(stat.year);
  //     });
  
  //     // Process each type of incident
  //     inputData?.forEach((type: any) => {
  //         const seriesData = type.stats.map((stat: any) => stat.incidents_count);
  //         series.push({ name: type.type, data: seriesData });
  //     });
  
  //     return {
  //         options: { xaxis: { categories } },
  //         series
  //     };
  // }
  
  
  
  // Transforming the data
  // const transformedData = transformData(data);
  // console.log('=== transformedData ===',transformedData);
  // setDataChart(transformedData)
  // }else{
  //   console.log('=== not type ===')
  // }
  // const example = {
  //   options: {
  //     xaxis: {
  //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  //     },
  //   },
  //   series: [
  //     {
  //       name: "Stats",
  //       data: [30, 50, 35, 50, 49, 60, 60, 91, 200],
  //     },
  //     {
  //       name: "Stats",
  //       data: [31, 40, 35, 50, 49, 60, 70, 91, 125],
  //     },
  //   ],
  // };
      function transformData(inputData: any) {
      const categories: any[] = [];
      const series: any[] = [];
  
      // Assuming the years are the same for all types, we can use the first type to get the years
      inputData[0]?.stats?.forEach((stat: any) => {
          categories.push(stat.year);
      });
      
      // Process each type of incident
      inputData?.forEach((type: any) => {
          const seriesData = type.stats.map((stat: any) => {
            console.log('= input data =', stat)
            if(stat.stats !== undefined){
              return stat.stats
            }else{
              return stat.incidents_count
            }
          });
          series.push({ name: type.type, data: seriesData });
      });
  
      return {
          options: { xaxis: { categories } },
          series
      };
  }
  
  
  
  // Transforming the data
  const transformedData = transformData(data);
  console.log('=== transformedData ===',transformedData, type);
  // setDataChart(example)
  
  return (
    <Chart
      options={transformedData.options}
      series={transformedData.series}
      type="area"
      width="100%"
    />
  );
});

export default AreaChart;
