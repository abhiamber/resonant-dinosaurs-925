import React, { useEffect, useState } from 'react'
import "./Cart.css"
import Cartitems from '../Components/Cartitems'
import { Box, SimpleGrid, Image, Text, Divider, Button } from "@chakra-ui/react"
const Cart = () => {
    const [cart, setCart] = useState([])
    const [pin, setPin] = useState("")
    useEffect(() => {
        fetch(`http://localhost:8080/cart`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }).then(res => res.json()).then(res => setCart(res)).catch(err => console.log(err))
    }, [])
    let total = Math.round(cart.reduce((a, c) => a + c.price, 0))
    total = total * 75;
    var date = new Date()
    var month = date.toLocaleString("default", { month: "short" });
    var day = date.toLocaleString("default", { day: "2-digit" });
    return (
        <SimpleGrid columns={[1, 1, 2, 2, 2]} className='cartcontainer'>
            <Box >
                <Text textAlign={'left'} fontSize='18px' color={'black'} fontWeight='bold'>MY Cart({cart.length})</Text>
                {
                    cart ? cart.map((item) => (
                        <Cartitems key={item._id} image_link={item.image_link} name={item.name} quantity={item.quantity} price={item.price} />
                    )) : <h1>Null</h1>
                }
            </Box>
            <Box className='cartDetails'>
                <Box className='safepayment'>
                    <Image src='https://media6.ppl-media.com/mediafiles/ecomm/misc/1515664301_shield.png' width='50px' height='50px' alt='safe Payment' />
                    <Box className='genuinediv'>
                        <span>100% Safe Payments</span>
                        <Text fontSize={['14px', '14px', '14px', '16px']}>Genuine Products | Easy Returns</Text>
                    </Box>
                </Box>
                <Box className='deliverysec'>
                    <input placeholder='Enter Pincode' value={pin} onChange={(e) => setPin(e.target.value)} maxLength={6} />
                    <span>CHECK DELIVERY</span>
                </Box>
                {
                    pin.length == 6 ? <h4 style={{ color: 'green' }}>Delivery by {Number(day) + 5} {month} (Exact dates on Address page) </h4> : null
                }
                <Divider width='100%' margin='auto' />
                <Box className='pricedivcontainer'>
                    <Box className='pricesubdiv'>
                        <Text fontSize={['14px', '14px', '16px', '16px']}>Total MRP:</Text>
                        <Text fontSize={['14px', '14px', '16px', '16px']}>₹{total}</Text>
                    </Box>
                    <Box className='pricesubdiv'>
                        <Text fontSize={['14px', '14px', '16px', '16px']}>Saving on MRP:</Text>
                        <Text fontSize={['14px', '14px', '16px', '16px']}>₹{total * (10 / 100)}</Text>
                    </Box>
                    <Box className='pricesubdiv'>
                        <Text fontSize={['14px', '14px', '16px', '16px']}>Subtotal:</Text>
                        <Text fontSize={['14px', '14px', '16px', '16px']}>₹{total - total * (10 / 100)}</Text>
                    </Box>
                    <Box className='pricesubdiv'>
                        <Text fontSize={['14px', '14px', '16px', '16px']}>Shipping Charges:</Text>
                        <Text fontSize={['14px', '14px', '16px', '16px']}>Free</Text>
                    </Box>
                    <Divider width='100%' margin='auto' marginTop='10px' border='1px solid gray' />
                    <Box display='flex' justifyContent='space-between' fontWeight='700' marginTop='10px'>
                        <Text fontSize='18px' color='black'>Order Total</Text>
                        <Text fontSize='18px' color='black'>₹{total - total * (10 / 100)}</Text>
                    </Box>
                    <Button className='placeorder' bg={'#e40980'} borderRadius='0px' _hover={{ bg: '#e40980' }}>PLACE ORDER</Button>
                    <p>Need Help? 8655500222 </p>
                </Box>
            </Box>
        </SimpleGrid>
    )
}

export default Cart