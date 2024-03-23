import { Box, Button, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
export const Address=()=>
{
    const [addressInfo,setAddress]=useState({
        name:"",
        email:"",
        address:"",
        moblie:"",
        pincode:"",
        city:"",
    })
    function handleCheckout()
    {
        
    }
    
    return (
        <>
            <Box bg={'#fff'} w={'30%'} p={20} m={'auto'} boxShadow={'20px 20px 20px #000'}>
                <VStack gap={20} m={0}>
                <Text fontSize={24} m={0}>Addres Info</Text>

                   <Input onChange={(e)=>{
                    setAddress({name:e.target.value})
                   }} name={'name'} p={10} w={'80%'} type="text" placeholder="Your Name"/>

                   <Input onChange={(e)=>{
                    setAddress({email:e.target.value})
                   }} name={'email'} p={10} w={'80%'} type="email" placeholder="Your Email"/>

                   <Input onChange={(e)=>{
                    setAddress({address:e.target.value})
                   }} name={'address'} p={10} w={'80%'} type="text" placeholder="Your Address"/>

                   <Input onChange={(e)=>{
                    setAddress({moblie:e.target.value})
                   }} name={'mobile'} p={10} w={'80%'} type="number" placeholder="Yourn Mobile Number"/>

                   <Input onChange={(e)=>{
                    setAddress({pincode:e.target.value})
                   }} name={'pincode'} p={10} w={'80%'} type="number" placeholder="Pincode"/>

                   <Input onChange={(e)=>{
                    setAddress({city:e.target.value})
                   }} name={'city'} p={10} w={'80%'} tyoe="text" placeholder="Your City"/>

                    <Button onClick={handleCheckout} w={150} p={10} bg={'#fff'} border={'1px solid #000'} cursor={'pointer'} fontSize={16} fontFamily={'revert'}>Checkout</Button>
                    </VStack>
            </Box>
        </>
    )
}