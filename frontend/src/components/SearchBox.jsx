import { Box, Flex, Spacer, Text, Image, Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverHeader, PopoverBody } from "@chakra-ui/react";
import React, { useContext } from "react";
import { CiSearch, CiHeart, CiFaceSmile, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../image/P.png";
import { AuthContext } from "../Utilis/Auth";
import NavItem from "./navbar/NavbarItem/NavItem";

const SearchBox = () => {
  const { user, logout } = useContext(AuthContext);

  // console.log(user);

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

            <Box color={"black"} fontWeight="light" fontSize="40px" mt="-1.5">
              <Popover trigger="hover">
                <PopoverTrigger>
                  <Box className={"blackHover"} p="7px">
                    <CiFaceSmile />
                  </Box>
                </PopoverTrigger>
                <PopoverContent w="15vw">
                  <PopoverArrow />
                  <PopoverHeader>
                    <Box h="0.5px" bg="black" w="73%" m="auto"></Box>
                    <Flex mx="10px" alignItems="center" justifyContent="space-between" flexDirection={"column"}>
                      {user ? <Text color={"green"} fontSize="20px"><Link to="#">{user.user}</Link></Text> : <Button color={"black"} variant="outline" w="150px" bg="blue"><Link to="/login">Sign in</Link></Button>}
                      {user ? <Text fontSize={"17px"} color={"red"}><Link>Your Order</Link></Text> : <Text fontSize={"17px"} color={"red"}><Link to="/register">New Customer?</Link></Text>}
                      {user ? <Text color={"red"}><Link onClick={logout}>Logout</Link></Text> : <Text fontSize={"20px"} color={"red"}><Link to="/register">Register Now.</Link></Text>}
                    </Flex>
                    <Box h="1px" bg="black" w="70%" m="auto"></Box>
                  </PopoverHeader>
                  <PopoverBody>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
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
