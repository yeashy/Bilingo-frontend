import { Box, Flex, Text } from "@chakra-ui/react";

function NewWordBox(){
    return(
        <Flex bgColor='white' borderRadius='16px' flexDirection='column' maxW='500px' >
            <Text as='b' fontSize='5xl'>Airplane</Text>
            
            <Text as='b' fontSize='5xl'>Самолёт</Text>

            <Flex justifyContent='center' my='15px'>
                <Text as='b'>P. O. I.:</Text>
                <Text mx='10px'>Noun</Text>

                <Text as='b'>Level:</Text>
                <Text ml='10px'>A2</Text>
            </Flex>
        </Flex>
    )
}

export default NewWordBox;