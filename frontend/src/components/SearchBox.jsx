import { Box, Flex, Spacer, Text, Image } from "@chakra-ui/react";
import React from "react";
import { CiSearch, CiHeart, CiFaceSmile, CiShoppingCart } from "react-icons/ci";
// import { IconName } from "react-icons/bi";
import logo from "../image/P.png";
import NavItem from "./navbar/NavbarItem/NavItem";

const SearchBox = () => {
  return (
    <Box pt="5px" ml="38px">
      <Flex p="3px">
        <Box h="10">
          <Flex>
            {" "}
            <Text>What are you looking for?</Text>
            <Text pl="45px" fontSize={"25px"}>
              <CiSearch />
            </Text>
          </Flex>
          <Box bg="blue" h="1.4px" />
        </Box>
        <Spacer />
        <Box h="10" ml="-35px">
          <Image
            boxSize="60px"
            borderRadius={"5px"}
            w="80px"
            h="40px"
            objectFit="cover"
            src={logo}
            alt="logo"
          />
        </Box>
        <Spacer />
        <Box w="180px" h="10" pl="10px">
          <Flex>
            <Box color={"black"} fontWeight="light" fontSize="40px">
              <CiHeart />
            </Box>

            <Box color={"black"} fontWeight="light" fontSize="40px">
              <CiFaceSmile />
            </Box>

            <Box color={"black"} fontWeight="light" fontSize="40px">
              <CiShoppingCart />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <hr />
      <NavItem />
    </Box>
  );
};

export default SearchBox;
