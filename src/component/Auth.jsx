import {Box,Button,Input,Link,Text, VStack} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { LoginUser } from '../Actoins/userAction';
export const Auth=()=>
{
    
    const [auth,setAuth]=useState(false);
  
    return (
        <Box id='auth'  boxShadow={'20px 20px 20px #000'} borderRadius={10} p={20}  margin={'auto'}  w={'30%'} bg={'#fff'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
           {
            auth?<SignIn setAuth={setAuth} auth={auth}/>: <Login setAuth={setAuth} auth={auth}/>
           }
        </Box>
    )
}
const Login=({setAuth,auth})=>
{
    const dispatch=useDispatch()
    let loginData={
        email:"",
        password:""
    }
    const handleSubmit=()=>{
        console.log(loginData);
        dispatch(LoginUser(loginData))
        
    }
    return (
        <>
    <Text  fontSize={28} m={0} mb={20}>LogIn</Text>
            <VStack gap={20} w={'100%'}>
                <Input id='input' w={'60%'} p={10} type="email" onChange={(e)=>loginData.email=e.target.value} placeholder='Your Email'/>
                <Input id='input' w={'60%'} p={10} type='password' onChange={(e)=>loginData.password=e.target.value} placeholder='Your Password'/>
                <Button onClick={()=>handleSubmit()} fontSize={15} fontFamily={'revert'} bg={'#FBA834'} border={'1px solid #000'} p={10} w={100} >Login</Button>
                <Link onClick={()=>{setAuth(!auth)}} cursor={'pointer'}>Do not have account?</Link>
            </VStack>
    </>
    )
}

const SignIn=({setAuth,auth})=>
{
    return (
        <>
    <Text  fontSize={28} m={0} mb={20} >SignIn</Text>
            <VStack gap={20} w={'100%'}>
                <Input id='input' w={"60%"} p={10} type='text' placeholder='Your Name'/>
                <Input id='input' w={'60%'} p={10} type="email" placeholder='Your Email'/>
                <Input id='input' w={'60%'} p={10} type='password' placeholder='New Password'/>
                <Input id='input' w={"60%"} p={10} type='password' placeholder='Confirm Password'/>
                <Button fontSize={15} fontFamily={'revert'} bg={'#FBA834'} border={'1px solid #000'} p={10} w={100} >Login</Button>
                <Link onClick={()=>{setAuth(!auth)}} cursor={'pointer'}>Already have account?</Link>
            </VStack>
    </>
    )
}

