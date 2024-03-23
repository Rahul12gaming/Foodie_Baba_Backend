import { Box, HStack, Image, Text } from "@chakra-ui/react"

export const Gallery=()=>
{
    return (
        <>
            <Box>
                <Text fontSize={30} fontFamily={'revert'} textAlign={'center'}>Our Gallery</Text>
                <HStack justifyContent={'center'} gap={20} flexWrap={'wrap'}>
                    <Image w={450} src={'./gallery1.jpg'}/>
                    <Image w={450} src={'./gallery2.jpg'}/>
                    <Image w={450} src={'./gallery3.jpg'}/>
                    <Image w={450} src={'./gallery4.jpg'}/>

                    <Image w={450} src={'./gallery5.jpg'}/>
                    <Image w={450} src={'./gallery6.jpg'}/>
                    <Image w={450} src={'./gallery7.jpg'}/>
                    <Image w={450} src={'./gallery8.jpg'}/>

                    <Image w={450} src={'./gallery9.jpg'}/>
                    <Image w={450} src={'./gallery10.jpg'}/>
                    <Image w={450} src={'./gallery11.jpg'}/>
                    <Image w={450} src={'./gallery12.jpg'}/>
                    
                </HStack>
            </Box>
        </>
    )
}