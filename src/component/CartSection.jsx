import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { FcEmptyTrash } from "react-icons/fc"
import { RemoveFromCart } from "../Actoins/cartAction";

export const CartSection = () => {
  const { cart } = useSelector((state) => state.cart);
  const {user,isLogin}=useSelector((state)=>state.user)
  const dispatch=useDispatch()

  return (
    <>
    {
      cart.length===0?<EmptyCart/>:
    
      <Box id="cart" transition={"ease 0.5s"} w={"50%"} p={20} bg={"#fff"} m={"auto"}>
        <Text textAlign={"center"} fontFamily={"revert"} fontSize={28}>
          Your Bag!
        </Text>
        <VStack justifyContent={"center"} gap={20}>
          {cart.map((item) => (
            <Card>
              <CardBody>
                <HStack alignItems={"flex-start"}>
                  <Image id="cart-image"
                    src={item.img}
                    w={180}
                  />
                  <Box>
                    <Text m={0} fontSize={16} fontFamily={"revert"}>
                      {item.name}
                    </Text>
                    <Text m={0} fontSize={18} fontFamily={"revert"}>
                      ₹{item.price}
                    </Text>
                    <Text m={0} fz={16} fontFamily={"revert"}>
                      Delivery Price : free
                    </Text>
                    <Box gap={5} display={"flex"} alignItems={"center"}>
                      <Button
                        fontSize={30}
                        border={"1px solid #000"}
                        bg={"orangered"}
                        color={"#fff"}
                        w={30}
                        h={30}
                      >
                        +
                      </Button>
                      <Text>1</Text>
                      <Button
                        fontSize={30}
                        border={"1px solid #000"}
                        bg={"orangered"}
                        color={"#fff"}
                        w={30}
                        h={30}
                      >
                        -
                      </Button>
                    </Box>
                    <Button w={150} p={10} bg={'#fff'} border={'1px solid #000'} cursor={'pointer'} fontSize={16} fontFamily={'revert'} onClick={()=>dispatch(RemoveFromCart(item._id))}>Remove Item</Button>
                  </Box>
                </HStack>
              </CardBody>
            </Card>
          ))}

          <Button
          disabled={cart.length===0?true:false}
            w={150}
            p={10}
            bg={"#fff"}
            border={"1px solid #000"}
            cursor={"pointer"}
            fontSize={16}
            fontFamily={"revert"}
          >
           <Link href={user===null?"/auth":"/checkout"}>
            Proceed
           </Link>
          </Button>
        </VStack>
      </Box>
}
    </>
  );
};

const EmptyCart=()=>
{
  return (
    <>
      <Box transition={"ease 0.5s"} w={"30%"} p={20} bg={"#fff"} m={"auto"} textAlign={'center'}>
      <Text textAlign={"center"} fontFamily={"revert"} fontSize={28}>
          Your Bag!
        </Text>
        <FcEmptyTrash size={70}/>
        <Text textAlign={'center'} fontSize={18}>Your Cart Is Empty!</Text>
        <Link href="/menu">Back To Menu</Link>
      </Box>
    </>
  )
}