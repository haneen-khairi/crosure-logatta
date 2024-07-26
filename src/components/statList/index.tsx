import { Flex, IconButton, Text } from "@chakra-ui/react";

interface props {
  stats: {
    color: string;
    Icon: any;
    title: string;
    stat?: number | string;
  }[];
}

const StatList = ({ stats }: props) => {
  return stats.map(({ Icon, title, stat, color }, i) => (
    <Flex justifyContent="space-between" key={i} my={4}>
      <Text>
        <IconButton
          isRound
          aria-label="Done"
          colorScheme={color}
          fontSize="20px"
          me={2}
          cursor="default"
          icon={<Icon m="auto auto" />}
        />
        {title}
      </Text>

      <Text>{stat}</Text>
    </Flex>
  ));
};

export default StatList;
