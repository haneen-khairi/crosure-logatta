import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";

import InputGroupComp from "../forms/InputGroup";

interface props {
  onSubmit: any;
}

const SearchBar = ({ onSubmit }: props) => {
  const { postcode: code } = useSelector(
    (_: { data: { postcode: string } }) => _.data
  );

  const [postcode, setPostcode] = useState(code || "");

  const onValueSubmit = () => {
    onSubmit(postcode);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onValueSubmit();
      }}
    >
      <InputGroup size="lg">
        <InputGroupComp
          name="postcode"
          placeholder="Search for postcode..."
          value={postcode}
          onChange={(name = "", value = "") => {
            setPostcode(value);
            console.log({ name });
          }}
          beforeIcon={<SearchIcon />}
          backgroundColor="white"
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
