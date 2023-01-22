import { Box, Heading, Table, Tbody, Td, Thead, Tr } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import BackendURL from '../BackendURL';

const Order = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
    }, []);


    const getOrders = async () => {
        let res = await fetch(`${BackendURL}/order/getnotdeliveredofuser/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "email": localStorage.getItem("email"),
                "token": localStorage.getItem("token")
            }
        }).then((res) => res.json())
            .then((res) => {
                setOrders(res.notDelivered);
            }).catch((err) => {
                console.log(err)
            })
    };
    return (
        <div>
            <Heading textAlign={"left"} m={"2% 0"}>Orders Details</Heading>
            <Box m={"2% 0"}>
                <Table variant={"striped"}>
                    <Thead fontSize={"23px"} color="blue">
                        <Tr>
                            <Td>Product Brand</Td>
                            <Td>UserID</Td>
                            <Td>Status</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orders ? orders.map((ele) =>
                            <Tr key={ele._id}>
                                <Td>{ele.userId}</Td>
                                <Td>{ele.createdAt}</Td>
                                <Td>{ele.currentStatus}</Td>
                            </Tr>
                        ) : <Heading>No Order Till Now</Heading>}
                    </Tbody>
                </Table>
            </Box>
        </div>
    );
}

export default Order;