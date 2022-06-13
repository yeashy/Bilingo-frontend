import { Flex, Text } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

function NewWordBox() {
    return (
        <Flex bgColor='white' borderRadius='16px' flexDirection='column' maxW='500px' padding="0 10px">
            <Text as='b' fontSize='5xl'>Airplane</Text>
            <hr />
            <Text as='b' fontSize='5xl'>Самолёт</Text>

            <Flex justifyContent='space-between' my='15px'>
                <Text fontSize="2xl"><AiOutlineSearch /></Text>
                <Flex>
                    <Text as='b'>P. O. I.:</Text>
                    <Text mx='10px'>Noun</Text>

                    <Text as='b'>Level:</Text>
                    <Text ml='10px'>A2</Text>
                </Flex>
                <Text color="gray">2/5</Text>
            </Flex>
        </Flex>
    )
}

export default NewWordBox;