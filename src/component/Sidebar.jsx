import {
  Box,
  Button,
  HStack,
  Link,
  Text,
  VStack,
  Image,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalContent,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoHome } from "react-icons/io5";
import { MdMenuBook } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { BsFillCartDashFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
export const Navbar = () => {
  const { user, loading, isLogin } = useSelector((state) => state.user);
 
  return (
    <>
     
      <Box
        position={"fixed"}
        left={0}
        top={0}
        bg={"#fff"}
        color={"#323232"}
        w={"4%"}
        p={20}
        h={"100vh"}
      >
         
        <VStack pt={20} gap={20}>
          <Image src="./logo2.png" w={50} />
          <Link href="/">
            <Button
              border={"none"}
              fontSize={26}
              bg={"#fff"}
              color={"#323232"}
              borderRadius={50}
              p={10}
              _hover={{
                bg: "orange",
                color: "#fff",
                border: "none",
                transition: "ease",
              }}
            >
              <IoHome />
            </Button>
          </Link>
          <Link href="/menu">
            <Button
              border={"none"}
              fontSize={26}
              bg={"#fff"}
              color={"#323232"}
              borderRadius={50}
              p={10}
              _hover={{
                bg: "orange",
                color: "#fff",
                border: "none",
                transition: "ease",
              }}
            >
              <MdMenuBook />
            </Button>
          </Link>
          <Link href="/cart">
            <Button
              border={"none"}
              fontSize={26}
              bg={"#fff"}
              color={"#323232"}
              borderRadius={50}
              p={10}
              _hover={{
                bg: "orange",
                color: "#fff",
                border: "none",
                transition: "ease",
              }}
            >
              <BsFillCartDashFill />
            </Button>
          </Link>
          <Link>
            <Button
              border={"none"}
              fontSize={26}
              bg={"#fff"}
              color={"#323232"}
              borderRadius={50}
              p={10}
              _hover={{
                bg: "orange",
                color: "#fff",
                border: "none",
                transition: "ease",
              }}
            >
              <BsSearch />
            </Button>
          </Link>
          {user===null ? (
            <>
             
             <Link href="/auth">
            <Button
              border={"none"}
              fontSize={30}
              bg={"#fff"}
              color={"#323232"}
              borderRadius={50}
              p={10}
              _hover={{
                bg: "orange",
                color: "#fff",
                border: "none",
                transition: "ease",
              }}
            >
              <IoLogIn />
            </Button>
          </Link>
           
          </>
          ) : (
            
           

<Link href={`/user/cdgd`}>
<Button  
  border={"none"}
  fontSize={26}
  bg={"#fff"}
  color={"#323232"}
  borderRadius={50}
  p={10}
  _hover={{
    bg: "orange",
    color: "#fff",
    border: "none",
    transition: "ease",
  }}
>
  <FaRegUser />
</Button>
</Link>
         
          )}

          {/* <Button border={'none'} fontSize={26} bg={'#fff'} color={'#323232'} borderRadius={50} p={10} _hover={{bg:'orange',color:'#fff',border:'none',transition:'ease'}}><IoHome/></Button> */}
        </VStack>
      </Box>
    </>
  );
};
