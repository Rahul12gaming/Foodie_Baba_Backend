import { Box, HStack, Image, Link } from "@chakra-ui/react"
import { FiShoppingCart  } from "react-icons/fi";

export const Header=({setClick,click})=>
{
    return (
        <> 
            <Box id="header" w={'100%'} boxSizing="border-box"  bg={'#fff'} position={'sticky'} transition={'ease 0.5s'}  top={0} zIndex={100}  p={20} mb={10}  >
        <HStack justifyContent={'space-between'}>
          <Box>
          <Image src='./logo2.png' w={80} />
          </Box>
          <Box >
            <Link href="/cart">
            <FiShoppingCart onClick={()=>{
              setClick(!click)
            }} cursor={'pointer'} size={25}/>
            </Link>
          </Box>
          {/* <Box>
            <Input w={200} p={5} borderRadius={5} border={'2px solid #000000'} type="text"/>
          </Box> */}
        </HStack>
      </Box>
        </>

    )
}