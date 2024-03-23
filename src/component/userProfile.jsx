import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {  LogoutUser } from "../Actoins/userAction";


export const UserProfile = () => {
  const dispatch=useDispatch()
  const { user } = useSelector((state) => state.user);
  
  return (
    <>
      <Box w={"30%"} m={"auto"} bgColor={"#fff"} textAlign={"center"} p={20}>
        <Text fontSize={20}>Welcome Back Mr. {user.username}</Text>
        <Box p={10} fontSize={19}>
          <Text>Name : {user.name}</Text>
          <Text>Email : {user.email}</Text>
          <Button  w={150}
            p={10}
            bg={"#fff"}
            border={"1px solid #000"}
            cursor={"pointer"}
            fontSize={16}
            fontFamily={"revert"}  onClick={()=>dispatch(LogoutUser())}>LogOut</Button>
        </Box>
      </Box>
    </>
  );
};
