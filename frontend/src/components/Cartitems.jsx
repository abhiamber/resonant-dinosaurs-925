import React from 'react'
import "./Cartitem.css"
import { Text, Box, Divider } from "@chakra-ui/react"
const Cartitems = ({ image_link, name, quantity, price, pro_id }) => {

    const handleDelete = (id) => {
        window.location.reload()
        return fetch(`http://localhost:8080/cart/delete/${id}`, {
            method: "DELETE",
            headers: {
                'Authorization': localStorage.getItem("token")
            }
        }).then(res => res.json()).then(res => console.log('item deleted successfully')).catch(err => console.log('err'))
    }
    return (
        <div className='cartitems'>
            <div>
                <img src={image_link} alt={name} />
            </div>
            <Box className='cartitemdet'>
                <Text fontSize={'xl'} color='black' fontWeight={'600'} textAlign='left'>{name}</Text>
                <Text marginTop='10px' fontSize={'18px'} textAlign='left' color='black' fontWeight={'600'}>{quantity} Items Left</Text>
                <Box marginTop='10px' display={'flex'} gap='10px'>
                    <button onClick={() => handleDelete(pro_id)}>Remove</button>
                    <Divider orientation='vertical' margin='auto' border='1px solid gray' h={'12px'} />
                    <button>Move to wishlist</button>
                </Box>
            </Box>
            <Text fontSize={'xl'} color='black' fontWeight={'600'}>₹{price * 75}</Text>
        </div>
    )
}

export default Cartitems