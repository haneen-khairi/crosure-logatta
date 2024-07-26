import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";

interface props {
  onClick: any;
}

const ShowMoreButton = ({ onClick }: props) => {
  return (
    <Text color="primary.500" role="button" onClick={onClick}>
      Show More <ChevronRightIcon />
    </Text>
  );
};

export default ShowMoreButton;
