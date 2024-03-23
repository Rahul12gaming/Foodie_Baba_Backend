import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Header } from "./Header";
export const Hero = () => {
  return (
    <>
      <Box id="hero"
        bg={"#FF8911"}
        color={"#fff"}
        position={"relative"}
        p={20}
        w={"95%"}
        border={"1px solid #000"}
        borderRadius={20}
      >
        <HStack id="hero-container" justifyContent={"space-around"}>
          <Box>
            <Image w={300} src="./hero.png" />
          </Box>
          <Box gap={10}>
            <Text fontSize={32} fontWeight={700} m={0}>
              HURRAY!
            </Text>
            <Text fontSize={22} fontWeight={600} m={0}>
              Offering 50% Off on SUNDAY'S
            </Text>
            <Text fontSize={22} fontWeight={600} m={0} mb={10}>
              CLAIM THE OFFER'S NOW
            </Text>
            <Button w={150} p={10} bg={'transparent'} border={'2px solid #000'} cursor={'pointer'} fontSize={16} fontFamily={'revert'}>Order Now</Button>
          </Box>
          <Box>
            <Image w={200} src={"https://i.gifer.com/25NW.gif"} />
          </Box>
        </HStack>
      </Box>
      <Box>
        <Text textAlign={"center"} fontSize={32} fontWeight={600}>
          Our Best Sellers!
        </Text>
        <Stack
          display={"flex"}
          direction={"row"}
          justifyContent={"center"}
          m={"auto"}
          flexWrap={"wrap"}
          gap={50}
        >
          <Card
            border={"1px solid #000"}
            display={"inline-block"}
            p={20}
            mb={20}
            borderRadius={10}
            bg={'#fff'}
          >
            <CardBody alignItems={"center"}>
              <VStack alignItems={"flex-start"} textAlign={"center"}>
                <Image
                  w={100}
                  src={
                    "https://rio-ci4k.onrender.com/static/media/pizzaSilce.ac5522f08752cd4f2161.png"
                  }
                />

                <Text ml={5} fontSize={20} fontWeight={600}>
                  Pizza's
                </Text>
              </VStack>
            </CardBody>
          </Card>

          <Card
            border={"1px solid #000"}
            display={"inline-block"}
            p={20}
            mb={20}
            borderRadius={10}
            bg={'#fff'}
          >
            <CardBody alignItems={"center"}>
              <VStack alignItems={"flex-start"} textAlign={"center"}>
                <Image
                  w={100}
                  src={"https://cdn-icons-png.flaticon.com/128/878/878052.png"}
                />

                <Text ml={5} fontSize={20} fontWeight={600}>
                  Pizza's
                </Text>
              </VStack>
            </CardBody>
          </Card>

          <Card
            border={"1px solid #000"}
            display={"inline-block"}
            p={20}
            mb={20}
            borderRadius={10}
            bg={'#fff'}
          >
            <CardBody alignItems={"center"}>
              <VStack alignItems={"flex-start"} textAlign={"center"}>
                <Image
                  w={100}
                  src={
                    "https://cdn-icons-png.flaticon.com/128/6518/6518098.png"
                  }
                />

                <Text ml={5} fontSize={20} fontWeight={600}>
                  Pizza's
                </Text>
              </VStack>
            </CardBody>
          </Card>

          <Card
            border={"1px solid #000"}
            display={"inline-block"}
            p={20}
            mb={20}
            borderRadius={10}
            bg={'#fff'}
          >
            <CardBody alignItems={"center"}>
              <VStack alignItems={"flex-start"} textAlign={"center"}>
                <Image
                  w={100}
                  src={
                    "https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/2x/external-ice-cream-carnival-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
                  }
                />

                <Text ml={5} fontSize={20} fontWeight={600}>
                  Pizza's
                </Text>
              </VStack>
            </CardBody>
          </Card>

          <Card
            border={"1px solid #000"}
            display={"inline-block"}
            p={20}
            mb={20}
            borderRadius={10}
            bg={'#fff'}
          >
            <CardBody alignItems={"center"}>
              <VStack alignItems={"flex-start"} textAlign={"center"}>
                <Image
                  w={100}
                  src={"https://img.icons8.com/color/2x/popcorn.png"}
                />

                <Text ml={5} fontSize={20} fontWeight={600}>
                  Pizza's
                </Text>
              </VStack>
            </CardBody>
          </Card>

          <Card
            border={"1px solid #000"}
            display={"inline-block"}
            p={20}
            mb={20}
            borderRadius={10}
            bg={'#fff'}
          >
            <CardBody alignItems={"center"}>
              <VStack alignItems={"flex-start"} textAlign={"center"}>
                <Image
                  w={100}
                  src={
                    "https://img.icons8.com/external-itim2101-flat-itim2101/2x/external-drinking-cafe-itim2101-flat-itim2101.png"
                  }
                />

                <Text ml={5} fontSize={20} fontWeight={600}>
                  Pizza's
                </Text>
              </VStack>
            </CardBody>
          </Card>
        </Stack>
      </Box>
      <Box>
        <Text textAlign={"center"} fontSize={36} fontWeight={600}>
          Request For Franchise
        </Text>
        <Stack alignItems={"center"} justifyContent={"center"} mb={20}>
          <Image w={400} src={"https://i.gifer.com/YmoC.gif"} />
        </Stack>
        <VStack>
          <Input
            w={"30%"}
            p={15}
            borderRadius={5}
            border={"2px solid #000"}
            type="text"
            placeholder="Your Name"
          />
          <Input
            w={"30%"}
            p={15}
            borderRadius={5}
            border={"2px solid #000"}
            type="email"
            placeholder="Your Email"
          />
          <Input
            w={"30%"}
            p={15}
            borderRadius={5}
            border={"2px solid #000"}
            type="number"
            placeholder="Your Mobile Number"
          />
          <Input
            w={"30%"}
            p={15}
            borderRadius={5}
            border={"2px solid #000"}
            type="text"
            placeholder="Your Address"
          />

          <Button
            w={150} p={15} bg={'#fff'} border={'1px solid #000'} cursor={'pointer'} fontSize={16} fontFamily={'revert'}
          >
            Request
          </Button>
        </VStack>
      </Box>
      
    </>
  );
}; 
