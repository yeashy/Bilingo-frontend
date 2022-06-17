import { Flex, Text, Button } from "@chakra-ui/react";
import { CircularProgress } from '@chakra-ui/react'
function ChooseRightComponent(props) {

    switch (props.exercise.type) {
        case "Type3":
            return (
                <Flex flexDirection='column' bgColor='white' borderRadius='16px' p='16px' mt='15px' align='center'>
                    <Text mb='15px' fontSize='2xl'>Choose the right description</Text>
                    <Flex alignSelf='stretch' gap='15px' flexDirection='column' flexGrow={1}>

                        {props.exercise.meanings.map(val => {
                            return (
                                <Button key={val}>{val}</Button>
                            )
                        })}

                    </Flex>
                </Flex>
            )
        case "type4":
            return (
                <Flex flexDirection='column' bgColor='white' borderRadius='16px' p='16px' mt='15px' align='center'>
                    <Text mb='15px' fontSize='2xl'>Choose the right {props.exercise.synOrAnt === 'ant' ? "antonym" : "synonym"}</Text>
                    <Flex alignSelf='stretch' gap='15px' flexDirection='column' flexGrow={1}>

                        {props.exercise.options.map(val => {
                            return (
                                <Button key={val}>{val}</Button>
                            )
                        })}

                    </Flex>
                </Flex>
            )
        case "Type5":
            return (
                <Flex flexDirection='column' bgColor='white' borderRadius='16px' p='16px' mt='15px' align='center'>
                    <Text mb='15px' fontSize='2xl'>Choose the right phonetic</Text>
                    <Flex alignSelf='stretch' gap='15px' flexDirection='column' flexGrow={1}>

                        {props.exercise.phonetics.map(val => {
                            return (
                                <Button key={val}>{val}</Button>
                            )
                        })}

                    </Flex>
                </Flex>
            )
        default:
            return (
                <Flex flexDirection='column' bgColor='white' borderRadius='16px' p='16px' mt='15px' align='center'>
                    <CircularProgress isIndeterminate />
                </Flex>)
    }
}

export default ChooseRightComponent;