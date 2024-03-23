import { Box, Image, Spinner, Text } from "@chakra-ui/react"

export const SpinnerLoader=()=>
{
    return (
        <>
        <Box h={'70vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

        
            <Box id="spinner" display={'flex'} flexDirection={'column'} alignItems={'center'}>
                <Image src={"./logo2.png"} width={100} borderRadius={999}/>
                <Text textAlign={'center'}>Welcome To Foodie BaBa !</Text>
            </Box> 
        </Box>       
        </>
    )
}