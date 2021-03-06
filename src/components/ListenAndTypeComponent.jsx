import {Flex, Text,Input} from "@chakra-ui/react";
import {AiOutlineSound} from 'react-icons/ai'

function ListenAndTypeComponent() {
    return (
        <Flex flexDirection='column' bgColor='white' borderRadius='16px' p='16px' mt='15px' align='center'>
            <Text fontSize='2xl'>Listen and type!</Text>
            <Text  fontSize='3xl' my='10px'><AiOutlineSound/></Text>
            <Input/>
        </Flex>
    )
}

export default ListenAndTypeComponent;