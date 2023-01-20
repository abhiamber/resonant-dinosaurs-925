import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  // GetToQueryProduct,
  GetToSearchQueryProduct,
} from "../../redux/prod/prod.action";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const { user, logout } = useContext(AuthContext);
import React, { useContext } from "react";
import NavItem from "./NavbarItem/NavItem";
import logo from "../../image/P.png";
import { CiFaceSmile, CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Utilis/Auth";


  const btnRef = React.useRef();

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  let [query, setQuery] = useState();

  const handleSearch = () => {
    if (!query) {
      return alert("Your Query is empty");
    }

    dispatch(GetToSearchQueryProduct(query));
    
    Navigate("/productmain", { state: { q: "S", query } });
    // console.log(query);
  };

  return (
    <Flex
      w="100%"
      m="auto"
      pl="18px"
      pr="18px"
      position={"sticky"}
      top="0px"
      zIndex={999}
      bg="white"
      boxShadow="base"
      // p="6"
      rounded="md"
      mb="5px"
      // bg="white"
    >
      <Box p="4">
        <Link to="/">
          <Image
            boxSize="60px"
            borderRadius={"5px"}
            w="80px"
            h="40px"
            objectFit="cover"
            src={logo}
            alt="logo"
          />
        </Link>
      </Box>
      <Spacer />
      <Box p="4">
        <NavItem />
      </Box>

      <Spacer />
      <Box p="4">
        <Flex>
          <Box>
            <Flex>
              {" "}
              <Button
                ref={btnRef}
                colorScheme="white"
                bg={"white"}
                color="black"
                onClick={onOpen}
              >
                <Text color={"black"} fontWeight="light" fontSize="40px">
                  <CiSearch />
                </Text>
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="top"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  <DrawerCloseButton />
                  <DrawerHeader mt="15px" fontWeight={"light"} m="auto" w="80%">
                    Search for Product and Brands{" "}
                  </DrawerHeader>

                  <DrawerBody m="auto" mt="5px" w="80%">
                    <Flex cursor={"pointer"}>
                      <Input
                        // variant="outline"
                        variant="flushed"
                        borderRadius={"1px"}
                        borderBottomColor={"#fd1d92"}
                        focusBorderColor="#fd1d92"
                        placeholder="Type here..."
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      <Text
                        ml="-10px"
                        pt="10px"
                        fontSize={"30px"}
                        color="#fd1d92"
                        bg="white"
                        onClick={handleSearch}
                      >
                        <CiSearch />
                      </Text>
                    </Flex>
                  </DrawerBody>

                  <DrawerFooter></DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Flex>
          </Box>
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



          <Box
            color={"black"}
            fontWeight="light"
            fontSize="40px"
            cursor={"pointer"}
          >
            <Link to="/cart">
              <CiShoppingCart />
            </Link>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
