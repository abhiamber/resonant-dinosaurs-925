import React, { useEffect } from "react";
import BackendURL from "../BackendURL";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Heading,
  Spinner,
  Stack,
  Table,
  Tbody,
  Td,
  Thead,
  Tr,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

const Admin = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [id, setID] = useState("");
  const [state, setState] = useState({
    name: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    getUser();
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch(`${BackendURL}/user/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        email: localStorage.getItem("email"),
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert(`${res.msg}`);
        getUser();
      })
      .catch((err) => {
        console.log(err);
      });

    setState({ name: "", email: "", address: "" });
  };

  const getUser = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    let res = await fetch(`${BackendURL}/user/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        email: localStorage.getItem("email"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        SetError(false);
        if (res.status === "NO") {
          alert("You are not Admin");
          navigate("/");
        }
        if (res.message === "OK") {
          setUsers(res.user);
        }
      })
      .catch((err) => {
        setLoading(false);
        SetError(true);
        console.log(err);
      });
  };

  const handleUpdate = (id) => {
    setID(id);
    onOpen();
  };

  const handleRemove = async (_id) => {
    let res = await fetch(`${BackendURL}/user/delete/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        email: localStorage.getItem("email"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        getUser();
        alert(`${res.msg}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { name, email, address } = state;
  return (
    <>
      <Heading textAlign={"center"}>Admin Panel</Heading>
      {loading && <Spinner color="red" />}
      {error && (
        <Alert status="error">
          <AlertIcon />
          Somthing went wrong!
        </Alert>
      )}

      <Box>
        <Table variant={"striped"}>
          <Thead fontSize={"23px"} color="blue">
            <Tr>
              <Td>Name</Td>
              <Td>Email</Td>
              <Td>Address</Td>
              <Td>Login At</Td>
              <Td>Update</Td>
              <Td>Remove</Td>
            </Tr>
          </Thead>
          <Tbody>
            {users &&
              users.map((ele) => (
                <Tr key={ele._id}>
                  <Td>{ele.name}</Td>
                  <Td>{ele.email}</Td>
                  <Td>{ele.address}</Td>
                  <Td>{ele.createdAt}</Td>
                  <Td>
                    <Button
                      variant={"outline"}
                      color={"green"}
                      onClick={() => handleUpdate(ele._id)}
                    >
                      {" "}
                      <AiOutlineEdit />
                    </Button>
                  </Td>
                  <Td>
                    <Button
                      variant={"outline"}
                      color={"red"}
                      onClick={() => handleRemove(ele._id)}
                    >
                      {" "}
                      <AiFillDelete />{" "}
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>

      <Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>User Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Flex
                  minH={"0vh"}
                  align={"center"}
                  justify={"center"}
                  bg="#F1F6F5"
                >
                  <Stack
                    spacing={8}
                    mx={"auto"}
                    maxW={{
                      base: "lg",
                      sm: "sm",
                      lg: "lg",
                      xl: "lg",
                      "2xl": "lg",
                    }}
                    py={12}
                    px={6}
                  >
                    <Box
                      rounded={"lg"}
                      bg={useColorModeValue("white", "gray.700")}
                      boxShadow={"lg"}
                      p={8}
                    >
                      <Stack spacing={4}>
                        <FormControl id="firstName" isRequired>
                          <FormLabel>Name</FormLabel>
                          <Input
                            name="name"
                            value={name}
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            required
                          />
                        </FormControl>

                        <FormControl id="address">
                          <FormLabel>Address</FormLabel>
                          <Input
                            value={address}
                            name="address"
                            required
                            placeholder="Address"
                            type="text"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="email" isRequired>
                          <FormLabel>Email address</FormLabel>
                          <Input
                            value={email}
                            placeholder="Email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            required
                          />
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                          <Button
                            fontWeight="600"
                            bgColor="black"
                            size="lg"
                            color="white"
                            borderRadius="0"
                            _hover={{
                              bg: "cyan.500",
                            }}
                            onClick={handleSubmit}
                          >
                            Update User
                          </Button>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                </Flex>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default Admin;
