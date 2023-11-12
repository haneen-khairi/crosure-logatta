import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as StatsAPI from "../../../api/search/stats";
import CardComp from "../../../components/cards";
// import InputTypePicker from "../../../components/forms/InputTypePicker";
import TabsComp from "../../../components/tabs";
import BoxTitle from "../../../components/typography/BoxTitle";
import AreaChart from "./AreaChart";
import SelectComponent from "../../../components/SelectComponent";

const ResultsChartsBox = () => {
  const [stats, setStats] = useState({ fires: [], crimes: [] });
  const [chartSelectedOptions, setChartSelectedOptions] = useState({
    fires: [],
    crimes: [],
  });

  const { postcode } = useSelector(
    (_: { data: { postcode: string } }) => _.data
  );

  useEffect(() => {
    StatsAPI.crimes({
      postcode,
      start: "07-2020",
      count: 5,
      types: chartSelectedOptions.crimes,
    }).then((crimes: any) => {
      // @ts-ignore
      console.log('=== crimes ===', crimes),
      setStats((current) => ({ ...current, crimes }));
    });

    StatsAPI.fires({
      postcode,
      start_year: 2010,
      count: 13,
      types: chartSelectedOptions.fires,
    }).then((fires) => {
      // @ts-ignore
      setStats((current) => ({ ...current, fires }));

    });
  }, [postcode, chartSelectedOptions]);

  const ChartCard = ({
    title = "",
    name = "",
    label = "",
    // options = [""],
    data = [],
  }) => (
    console.log('=== name ===', name),
    <Fragment>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <GridItem>
          <BoxTitle title={title} />
          <Text my={4}>
            {Object.values(data)?.reduce(
              // @ts-ignore
              (final = 0, current = 0) => (final += current),
              0
            )}{" "}
            {label}
          </Text>
        </GridItem>

        <GridItem>
          <SelectComponent
          name={name}
          allOptions={
            [
              {label: 'ALL' ,  value: 'All'},
              {label: 'Criminal damage and arson', value:'Criminal damage and arson'} , 
              {label:'Drugs',value: 'Drugs'}, 
              {label: 'Other crime',  value: 'Other crime'} ,
              {label: 'theft',  value: 'theft'} ,
              {label: 'Possession of weapons',  value: 'Possession of weapons'} ,
              {label: 'Public order',  value: 'Public order'} ,
              {label: 'Robbery',  value: 'Robbery'} ,
              {label: 'Vehicle crime',  value: 'Vehicle crime'} ,
              {label: 'Violence and sexual offences' , value: 'Violence and sexual offences'} 
            ]
          }
          getInitialDataBack={(value:any) => {
            setChartSelectedOptions((current) => ({
              ...current,
              [name]: value,
            }))
            // if (
            //   value.includes("All") &&
            //   !(chartSelectedOptions as any)['crimes'].includes("All")
            // ) {
            //   setChartSelectedOptions((current) => ({
            //     ...current,
            //     ['crimes']: ["All"],
            //   }))
            // } else {
            //   setChartSelectedOptions((current) => ({
            //     ...current,
            //     ['crimes']: value.filter((v:any) => v !== "All"),
            //   }));
            // }
          }}
          />
          {/* <InputTypePicker
            name={name}
            placeholder={"Type of " + label}
            type="selectMany"
            value={(chartSelectedOptions as any)[name]}
            onChange={(name = "", value = [""]) => {
              if (
                value.includes("All") &&
                !(chartSelectedOptions as any)[name].includes("All")
              ) {
                setChartSelectedOptions((current) => ({
                  ...current,
                  [name]: ["All"],
                }));
              } else {
                setChartSelectedOptions((current) => ({
                  ...current,
                  [name]: value.filter((v) => v !== "All"),
                }));
              }
            }}
            options={[
              {
                value: "All",
                label: "All",
              },
              ...options.map((option = "") => ({
                value: option,
                label: option,
              })),
            ]}
          /> */}
        </GridItem>

        <GridItem colSpan={2}>
          <AreaChart data={data} />
        </GridItem>
      </SimpleGrid>
    </Fragment>
  );

  const tabs = [
    {
      title: "Crime Statistics",
      body: (
        <ChartCard
          title="Crime Statistics"
          name="crimes"
          label="Crimes"
          data={stats.crimes}
          // options={[
          //   "Criminal damage and arson",
          //   "Drugs",
          //   "Other crime",
          //   "theft",
          //   "Possession of weapons",
          //   "Public order",
          //   "Robbery",
          //   "Vehicle crime",
          //   "Violence and sexual offences",
          // ]}
        />
      ),
    },
    {
      title: "Fire Incidents",
      body: (
        <ChartCard
          title="Fire Incidents"
          name="fires"
          label="Fire Incidents"
          data={stats.fires}
          // options={[
          //   "Chimney fire",
          //   "Secondary Fire - accidental",
          //   "Secondary Fire - deliberate",
          //   "Primary fire - buildings",
          // ]}
        />
      ),
    },
  ];

  return <CardComp body={<TabsComp tabs={tabs} />} />;
};

export default ResultsChartsBox;
