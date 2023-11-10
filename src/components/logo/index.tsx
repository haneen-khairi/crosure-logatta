import { Flex, Image } from "@chakra-ui/react";
import { Fragment } from "react";

import logo from "../../assets/img/brand/logo-photo.png";
import logoFullHWhite from "../../assets/img/brand/logo-white.svg";
import logoFullH from "../../assets/img/brand/logo.svg";

const Logo = ({
  noText = false,
  vertical = false,
  white = false,
  size = "200px",
}) => {
  const pickedLogo = white ? logoFullHWhite : logoFullH;

  return (
    <Fragment>
      {noText ? (
        <Image src={logo} w={size} />
      ) : vertical ? (
        <Fragment>
          <Image src={pickedLogo} w={size} />
        </Fragment>
      ) : (
        <Flex textAlign="center" alignItems="center" alignContent="center">
          <Image src={pickedLogo} w={size} me={2} />
        </Flex>
      )}
    </Fragment>
  );
};

export default Logo;
