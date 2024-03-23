import { Box, Button, Text, VStack } from "@chakra-ui/react"
import { useEffect } from "react"
import useRazorpay from "react-razorpay"
import { useSelector } from "react-redux"

export const Billing=()=>
{
    const {user}=useSelector((state)=>state.user)
    const {cart}=useSelector((state)=>state.cart)
    const [Razorpay]=useRazorpay()
    const loadScript=(scr)=>
    {
        return new Promise((resolve)=>{
            const script=document.createElement('script');
            script.src=scr;

            script.onload=()=>
            {
                resolve(true)
            }
            script.onerror=()=>
            {
                resolve(false)
            }
            document.body.appendChild(script);
        })
    }
    const displayRazorpay=async(price)=>
    {
        const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js');
        if(!res)
        {
            alert("You Are Offline!")
            return;
        }
        const options={
            key:"rzp_test_gjvF9dm2AC84U2",
            currency:"INR",
            amount:price*100,
            name:"Foodie Baba",
            image:"./logo2.png",
            description:"Foodie Baba ( A New Revolution In The World Of Food Industry )",
            handler:function(response){
                alert("successful")
                console.log(response);
            },
            prefill:"Foodie Baba"
        }
        const paymentObj= new window.Razorpay(options);
        paymentObj.open()
    }
    let amt=999;
    
    
    console.log(amt);
    return (
        <>
            <Box bg={'#fff'} w={'30%'} p={20} m={'auto'} boxShadow={'20px 20px 20px #000'}>
                <VStack gap={20} m={0}>
                    <Text fontSize={24} m={0}>User Info</Text>
                    <Text fontSize={18} m={0}>Name : {user.name}</Text>
                    <Text fontSize={18} m={0}>Email : {user.email}</Text>
                    <Text fontSize={24} m={0}>Payment Info</Text>
                    <Text fontSize={18} m={0}>Total Price: {amt}</Text>
                    <Text fontSize={18} m={0}>Total Items : {cart.length}</Text>
                   
                    <Button onClick={()=>displayRazorpay(amt)} w={150} p={10} bg={'#fff'} border={'1px solid #000'} cursor={'pointer'} fontSize={16} fontFamily={'revert'}>Proceed</Button>
                    </VStack>
            </Box>
        </>
    )
}

