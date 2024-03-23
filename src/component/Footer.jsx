import { Box, HStack, Image, Link, Text, VStack } from "@chakra-ui/react"

export const Footer=()=>
{
    return (
        <>
            <Box id="footer" bg={'#fff'} p={20} display={'flex'} flexDir={'column'} alignItems={'center'} justifyContent={'center'} mt={'50px'} zIndex={1001}>
                
                <Image borderRadius={200} src='./logo2.png' w={80} />
                <HStack id="footer-container" flexWrap={'wrap'}  mt={20} w={'60%'} justifyContent={'space-between'} alignItems={'center'}>
                    <VStack >
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Our Gallery</Link>
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Food Menu</Link>
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Policies</Link>
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Career</Link>
                    </VStack>

                    <VStack>
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Our Gallery</Link>
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Food Menu</Link>
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Policies</Link>
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Career</Link>
                    </VStack> 

                    <VStack> 
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Our Gallery</Link>
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Food Menu</Link>
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Policies</Link>
                        <Link color={'#000'} fontSize={18} fontFamily={'revert'} cursor={'pointer'}>Career</Link>
                    </VStack>
                </HStack>
            </Box>
        </>
    )
}