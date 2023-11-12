import { Flex } from "@chakra-ui/react";
import { Fragment } from "react";

import { summaryProps } from ".";
import ShowMoreButton from "../../../components/buttons/ShowMore";
import CardComp from "../../../components/cards";
import StatList from "../../../components/statList";
import BoxTitle from "../../../components/typography/BoxTitle";

interface props {
  data: summaryProps;
  setShowDetails: any;
}

const ResultsSummaryBox = ({ data, setShowDetails }: props) => {
  console.log('=== ResultsSummaryBox ===', data);
  
  const summaryStats = [
    {
      // color: "green",
      Icon: "/price_range.svg",
      title: "Price Range",
      stat: data.avg_price,
    },
    {
      // color: "blue",
      Icon: "/average_living_costs.svg",
      title: "Average Living Costs",
      stat: data.avg_living_costs,
    },
    // {
    //   color: "blue",
    //   Icon: TagLeftIcon,
    //   title: "Average Living Costs With Currency",
    //   stat: data.avg_living_costs_with_currency,
    // },
    // {
    //   color: "blue",
    //   Icon: TagLeftIcon,
    //   title: "Price With Currency",
    //   stat: data.price_with_currency,
    // },
  ];
  return (
    <CardComp
      body={
        <Fragment>
          <Flex justifyContent="space-between" mb={3}>
            <BoxTitle
              title={
                data.price_with_currency
                  ? "Property Summary"
                  : "Properties Summary"
              }
            />

            {data.avg_living_costs !== null && (
              <ShowMoreButton onClick={() => setShowDetails('1475')} />
            )}
          </Flex>

          <StatList stats={summaryStats} />
        </Fragment>
      }
    />
  );
};

export default ResultsSummaryBox;
