import {
  // Box,
  // Button,
  ButtonGroup,
  // Heading,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Icon } from "@chakra-ui/react";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../Utilis/ThemeContext/ThemeContext";


const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      marginBottom={"10px"}
      ml="32px"
    >
      <Spacer />
      <ButtonGroup
        cursor={"pointer"}
        gap="2"
        fontWeight={"light"}
        mr="32px"
        marginTop={"10px"}
        display={"flex"}
        flexWrap="wrap"
      >
        {" "}
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        <Icon as={FaMobileAlt} fontSize={"25px"} />
        <Text> DOWNLOAD APP</Text>
        <Text>| SUPPORT</Text>
        <Text display={{base: "none", sm:"none", md: "block", xl: "block", "2xl": "block"}}><Link to={"/order"}>| TRACK ORDER</Link></Text>
      </ButtonGroup>
    </Flex>
  );
};

export default Header;
