import {
  Box,
  Button,
  Card,
  CardBody,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  
} from "@chakra-ui/react";
import { FoodData } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../Actoins/cartAction";
import { useEffect } from "react";
import { getFoodData, getFoodDataByCategory } from "../Actoins/foodAction";
import { SpinnerLoader } from "./Spinner";


export const Item = () => {

  const dispatch=useDispatch()
  const linksValue=[{
    name:"Burger",
    value:"burger",
  },
{
  name:"Pizza",
  value:"pizza"
},
{
  name:"All Day Meal",
  value:"all day meal"
},
{
  name:"Non-Vegiterian",
  value:"non-vegiterian"
},
{
  name:"Drinks",
  value:"drinks"
},
{
  name:"Veg Thali",
  value:"veg thali"
}]
  const {food,loading}=useSelector((state)=>state.food)
  const handleCart=(item)=>{
    dispatch(AddToCart(item))
   alert("Item Added.")
  }
  const handleLinks=(value)=>{
    dispatch(getFoodDataByCategory(value))
  }
  useEffect(()=>{
    dispatch(getFoodData())
  },[])
  return (
   
    <>
     {
      loading?<SpinnerLoader/>:
     
   
      <Box bg={"#fff"} border={"1px solid #000"}>
        <Stack
          display={"flex"}
          direction={"row"}
          justifyContent={"start"}
          borderBottom={"1px solid #000"}
          p={10}
        >
          <Text fontSize={22} fontFamily={"revert"}>
            Categories
          </Text>
          <Button
            cursor={"pointer"}
            fontSize={20}
            bg={"transparent"}
            border={"none"}
            fontFamily={"revert"}
          >
            filters
          </Button>
        </Stack>
        <Box position={"sticky"} top={0} left={0}>
          <Stack
            display={"flex"}
            direction={"row"}
            justifyContent={"start"}
            alignItems={"flex-start"}
          >
            <VStack
              alignItems={"flex-start"}
              gap={20}
              p={20}
              w={"25%"}
             
            >
              {
                linksValue.map((data)=>(
                <Text
                
                _hover={{ color: "orange", fontSize: 19 }}
                cursor={"pointer"}
                m={0}
                fontFamily={"revert"}
                fontSize={18}
                onClick={()=>handleLinks(data.value)}
                
              >
                {data.name}
              </Text>
                ))
              }
              
             
            </VStack>
            <Box borderLeft={"2px solid #000"} mt={20} p={20} pb={30} mb={10}>
              <HStack
               
               
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
              >
                {food.map((item, index) => (
                  <Card p={20} bg={"#fff"} borderRadius={"10"}>
                    <CardBody>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                      >
                        <Image
                          w={250}
                          src={item.img}
                        />
                        <Text m={5} fontSize={20} fontFamily={"revert"}>
                          {item.name}
                        </Text>
                        <Stack
                          display={"flex"}
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Text fontSize={20} fontFamily={"revert"} m={0}>
                            {item.price}
                          </Text>
                          <Button
                            bg={"transparent"}
                            border={"1px solid #000"}
                            fontFamily={"revert"}
                            fontSize={16}
                            p={10}
                            onClick={()=>handleCart(item)}
                          >
                            ADD
                          </Button>
                        </Stack>
                      </Box>
                    </CardBody>
                  </Card>
                ))}
              </HStack>
            </Box>
          </Stack>
        </Box>
      </Box>
       }
    </>
  );
};
