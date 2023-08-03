import React, { useEffect } from 'react';
import BackendURL from '../BackendURL';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { Alert, AlertIcon, Box, Flex, Heading, Spinner, Stack, Table, Tbody, Td, Thead, Tr, FormControl, FormLabel, Input, Button, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Th, TableContainer } from '@chakra-ui/react';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';

let init = {
    prod_name: '',
    price: '',
    image_link: '',
    description: ''
}
const Admin = () => {
    const [formData, setFormData] = useState(init);
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, SetError] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [id, setID] = useState("");
    const [page, setPage] = useState(1);
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('');
    const [state, setState] = useState({
        name: "",
        email: "",
        address: ""
    });

    useEffect(() => {
        getUser(page);
        getOrders();
    }, [page]);

    const getOrders = async () => {
        let res = await fetch(`${BackendURL}/order/getall`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "email": localStorage.getItem("email"),
                "token": localStorage.getItem("token")
            }
        }).then((res) => res.json())
            .then((res) => {
                setOrders(res.delivered);
            }).catch((err) => {
                console.log(err)
            })
    };

    const handleChangeStatus = async (id) => {
        if (!status) {
            return alert("Please fill correct Status");
        };
        let res = await fetch(`${BackendURL}/order/changestatus`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "email": localStorage.getItem("email"),
                "token": localStorage.getItem("token")
            },
            body: JSON.stringify({ status, orderId: id })
        }).then((res) => res.json()).then((res) => {
            console.log(res);
            getOrders();
            alert(`${res.msg}`);
        }).catch((err) => {
            console.log(err)
        });
        setStatus("");
    };

    // console.log(orders);

    const handleFilter = (e) => {
        const { value } = e.target;
        getUser(page, value, "");
    };
    const handleFilter1 = (e) => {
        const { value } = e.target;
        getUser(page, "", value);
    };

    const handlePage = (val) => {
        let value = val + page;
        setPage(value);
    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        setState({ ...state, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch(`${BackendURL}/user/update/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "email": localStorage.getItem("email")
            },
            body: JSON.stringify(state)
        }).then((res) => res.json()).then((res) => {
            console.log(res);
            alert(`${res.msg}`);
            getUser(page);
        }).catch((err) => {
            console.log(err)
        });
        setState({ name: "", email: "", address: "" });
    };


    const getUser = async (page, qu = "", qa = "") => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 5000);
        let res = await fetch(`${BackendURL}/user/?page=${page}&limit=5&name=${qu}&address=${qa}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "email": localStorage.getItem("email")
            }
        }).then((res) => res.json()).then((res) => {
            setLoading(false);
            SetError(false);
            if (res.status === "NO") {
                alert("You are not Admin");
                navigate("/");
            }
            if (res.message === "OK") {
                setUsers(res.user)
            }
        }).catch((err) => {
            setLoading(false);
            SetError(true);
            console.log(err)
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
                "email": localStorage.getItem("email")
            },
        }).then((res) => res.json()).then((res) => {
            console.log(res);
            getUser(page);
            alert(`${res.msg}`)
        }).catch((err) => {
            console.log(err)
        });
    };

    // const handleUploadInCloudinary = () => {
    //     const data = new FormData();
    //     data.append("file", Cloudinary);
    //     data.append("upload_preset", "ml_default");
    //     data.append("cloud_name", "djib5oxng");

    //     // cloudinary setup
    //     fetch("https://api.cloudinary.com/v1_1/dd9cmhunr/image/upload", {
    //         method: "POST",
    //         body: data,
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             localStorage.setItem('cloudinary', data.url);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });

    // };

    const handleProdChange = (e) => {
        let { type, name, value, files } = e.target;
        value = type === 'file' ? files[0] : value;
        setFormData({ ...formData, [name]: value });
    };

    // post request for add a poduct
    const handleSubmitProd = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("file", formData.image_link);
        data.append("upload_preset", "ml_default");
        data.append("cloud_name", "djib5oxng");

        // cloudinary setup
        fetch("https://api.cloudinary.com/v1_1/dd9cmhunr/image/upload", {
            method: "POST",
            body: data,
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem('cloudinary', data.url);
            })
            .catch((err) => {
                console.log(err);
            });

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            addProductFunc();
        }, 4000);
    };

    async function addProductFunc() {
        let res = await fetch(`${BackendURL}/user/addProduct`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "email": localStorage.getItem("email")
            },
            body: JSON.stringify({ image_link: localStorage.getItem('cloudinary'), price: formData.price, prod_name: formData.prod_name, description: formData.description })
        }).then((res) => res.json()).then((res) => {
            alert(`${res.msg}`)
        }).catch((err) => {
            console.log(err);
        })
        setFormData({
            prod_name: '',
            price: '',
            image_link: '',
            description: ''
        });
    }

    const { prod_name, price, description } = formData;
    const { name, email, address } = state;
    return (
        <>
            <Heading textAlign={"center"} m={"2% 0"}>Admin Panel</Heading>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>{loading && <Spinner color='red' size={'lg'} />}</Box>
            {error && <Alert status='error'>
                <AlertIcon />
                Somthing went wrong!
            </Alert>}
            <hr />

            <Heading textAlign={"center"} m={"2% 0"} fontSize={'23px'}>Add Product</Heading>
            <Box w={['87%', '87%', '30%']} p={'3% 1%'} m='auto' display={'flex'} justifyContent={'center'} alignItems={'center'} boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px">
                <form onSubmit={handleSubmitProd}>
                    <Input mb='1%' w='300px' placeholder='Product Name' type='text' value={prod_name} name='prod_name' onChange={handleProdChange} />
                    <br />
                    <Input mb='1%' w='300px' placeholder='price' type='number' value={price} name='price' onChange={handleProdChange} />
                    <br />
                    <Input mb='1%' w='220px' placeholder='Image Link' name='image_link' onChange={handleProdChange} type='file' />
                    <br />
                    <Input mb='1%' w='300px' placeholder='Description' type='text' value={description} name='description' onChange={handleProdChange} />
                    <br />
                    <Input bg='blue' w='300px' type='submit' value={'ADD PRODUCT'} />
                </form>
            </Box>

            <Heading textAlign={"left"} m={"2% 0"}>Users Details</Heading>
            <Box m={"1% 0"} display={"flex"} justifyContent="center" alignItems={"center"} gap="10px">
                <Input w={{ base: "15%", sm: "31%", lg: "15%" }} placeholder='Search Username' onChange={handleFilter}></Input>
                <Input w={{ base: "15%", sm: "30%", lg: "15%" }} placeholder='Search Address' onChange={handleFilter1}></Input>
            </Box>



            <TableContainer mt={["15%", "15%", "0%"]}>
                <Table size='sm' variant={"striped"}>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Email</Th>
                            <Th>Address</Th>
                            <Th>Login At</Th>
                            <Th>Update</Th>
                            <Th>Remove</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users && users.map((ele) =>
                            <Tr key={ele._id}>
                                <Td>{ele.name}</Td>
                                <Td>{ele.email}</Td>
                                <Td>{ele.address}</Td>
                                <Td>{ele.createdAt}</Td>
                                <Td><Button variant={"outline"} color={"green"} onClick={() => handleUpdate(ele._id)}> <AiOutlineEdit /></Button></Td>
                                <Td><Button variant={"outline"} color={"red"} onClick={() => handleRemove(ele._id)}> <AiFillDelete /> </Button></Td>
                            </Tr>
                        )}
                    </Tbody>
                </Table>
            </TableContainer>

            <Box>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>User Details</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box>
                                <Flex minH={"0vh"} align={"center"} justify={"center"} bg="#F1F6F5">
                                    <Stack spacing={8} mx={"auto"} maxW={{ base: "lg", sm: "sm", lg: "lg", xl: "lg", "2xl": "lg" }} py={12} px={6}>
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
                                                        name='name'
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
                                                        name='email'
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
                                                            bg: "cyan.500"
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
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>


            <Box display={"flex"} alignItems="center" justifyContent={"center"} m="1% 0" gap={"5px"}>
                <Button variant={"outline"} color="green" isDisabled={page <= 1} onClick={() => handlePage(-1)}>PRE</Button>
                <Button variant={"outline"} color="red" isDisabled={true}>{page}</Button>
                <Button variant={"outline"} color="green" isDisabled={page >= 5} onClick={() => handlePage(1)}>NEXT</Button>
            </Box>

            <hr />

            <Heading textAlign={"left"} m={"2% 0"}>Orders Details</Heading>


            <TableContainer mt={["15%", "15%", "0%"]}>
                <Table size='sm' variant={"striped"}>
                    <Thead>
                        <Tr>
                            <Th>UserID</Th>
                            <Th>When</Th>
                            <Th>Status</Th>
                            <Th>Change Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orders ? orders.map((ele) =>
                            <Tr key={ele._id}>
                                <Td>{ele.userId}</Td>
                                <Td>{ele.createdAt}</Td>
                                <Td>{ele.currentStatus}</Td>
                                <Td>
                                    <Input value={status} variant={"outline"} w="200px" placeholder={"Enter Status"} onChange={(e) => setStatus(e.target.value)}></Input>
                                    <Button onClick={() => { handleChangeStatus(ele._id) }} bg="blue" color="black" variant={"outline"}>Submit</Button>
                                </Td>
                            </Tr>
                        ) : <Heading>No Order Till Now</Heading>}
                    </Tbody>
                </Table>
            </TableContainer>

        </>
    );
}

export default Admin;