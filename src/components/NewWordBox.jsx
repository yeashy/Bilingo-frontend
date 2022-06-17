import { Flex, Text } from "@chakra-ui/react";

function NewWordBox(props){

    return(
        <Flex bgColor='white' borderRadius='16px' flexDirection='column' maxW='500px' >
            <Text as='b' fontSize='5xl'>{props.newWord}</Text>
            
            <Text as='b' fontSize='5xl'>{props.newWordTranslation}</Text>

            <Flex justifyContent='center' my='15px'>
                <Text as='b'>P. O. I.:</Text>
                <Text mx='10px'>{props.partOfSpeech}</Text>

                <Text as='b'>Level:</Text>
                <Text ml='10px'>{props.level}</Text>
            </Flex>
        </Flex>
    )
}

export default NewWordBox;