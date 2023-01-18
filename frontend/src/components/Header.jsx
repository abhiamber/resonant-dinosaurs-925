import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { FaMobileAlt } from "react-icons/fa";

const Header = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      marginBottom={"10px"}
    >
      <Spacer />
      <ButtonGroup
        cursor={"pointer"}
        gap="2"
        fontWeight={"light"}
        paddingRight="50px"
        marginTop={"10px"}
      >
        {" "}
        <Icon as={FaMobileAlt} fontSize={"25px"} />
        <Text> DOWNLOAD APP</Text>
        <Text>| SUPPORT</Text>
        <Text>| TRACK ORDER</Text>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
