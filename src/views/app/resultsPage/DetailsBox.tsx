import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, TagLeftIcon, Text } from "@chakra-ui/react";
import { Fragment } from "react";

import { detailsProps } from ".";
import CardComp from "../../../components/cards";
import StatList from "../../../components/statList";
import BoxTitle from "../../../components/typography/BoxTitle";

interface props {
  data: detailsProps;
  reset: any;
}

const ResultsDetailsBox = ({ data, reset }: props) => {
  const stats = [
    {
      color: "green",
      Icon: TagLeftIcon,
      title: "Price",
      stat: data.price_with_currency,
    },
    {
      color: "blue",
      Icon: TagLeftIcon,
      title: "Average Living Costs",
      stat: data.avg_living_costs_with_currency,
    },
    {
      color: "blue",
      Icon: TagLeftIcon,
      title: "Type",
      stat: data.property_type,
    },
    {
      color: "blue",
      Icon: TagLeftIcon,
      title: "Bedrooms Count",
      stat: data.bedrooms,
    },
    {
      color: "blue",
      Icon: TagLeftIcon,
      title: "Bathrooms Count",
      stat: data.bathrooms,
    },
    {
      color: "blue",
      Icon: TagLeftIcon,
      title: "Condition",
      stat: data.condition,
    },
    {
      color: "blue",
      Icon: TagLeftIcon,
      title: "Is Storage",
      stat: data.storage ? "Yes" : "No",
    },
    {
      color: "blue",
      Icon: TagLeftIcon,
      title: "Gardens Count",
      stat: data.gardens,
    },
  ];

  return (
    <CardComp
      body={
        <Fragment>
          <Flex justifyContent="space-between" mb={3}>
            <BoxTitle title="Property Details" />

            <Text color="primary.500" role="button" onClick={reset}>
              Back <ChevronRightIcon />
            </Text>
          </Flex>

          <StatList stats={stats} />
        </Fragment>
      }
    />
  );
};

export default ResultsDetailsBox;
