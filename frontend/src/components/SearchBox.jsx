import {
  Box,
  Flex,
  Spacer,
  Text,
  Image,
  Input,
  Button,
  useDisclosure,
  // useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { CiSearch, CiHeart, CiFaceSmile, CiShoppingCart } from "react-icons/ci";
// import { IconName } from "react-icons/bi";
import logo from "../image/P.png";
import NavItem from "./navbar/NavbarItem/NavItem";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const SearchBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <Box pt="5px" ml="38px">
      <Flex p="3px">
        <Box h="10">
          <Flex>
            {" "}
            <Button
              ref={btnRef}
              colorScheme="white"
              bg={"white"}
              color="black"
              onClick={onOpen}
            >
              <Text>What are you looking for?</Text>
              <Text pl="45px" fontSize={"25px"}>
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
                    />
                    <Text
                      ml="-10px"
                      fontSize={"30px"}
                      color="#fd1d92"
                      bg="white"
                    >
                      <CiSearch />
                    </Text>
                  </Flex>
                </DrawerBody>

                <DrawerFooter></DrawerFooter>
              </DrawerContent>
            </Drawer>
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
        <Box w="12.85%" h="10" pl="10px">
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
