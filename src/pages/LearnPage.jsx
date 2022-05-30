import {Container, Flex, Text } from "@chakra-ui/react";
import ExpampleTabs from "../components/ExampleTabs";
import NewWordBox from "../components/NewWordBox";
import TaskBox from "../components/TaskBox";

function LearnPage() {

    
    return (
        <Container align='center' mt='30px' p='15px' bgColor='#EBF8FF' borderRadius='16px' maxW='1000px'>
            <Text fontSize='2xl' as='b'>Your new word is:</Text>
            <NewWordBox my='15px' />

            <Text fontSize='2xl' as='b'>Examples: </Text>
            <Flex flexDirection='column' bgColor='white' borderRadius='16px'>

                <ExpampleTabs />
            </Flex>

            <Text fontSize='2xl' as='b'>Task: </Text>
           
            <TaskBox/>
        </Container>
    )
}

export default LearnPage;