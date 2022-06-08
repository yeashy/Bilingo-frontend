import {Container, Flex, Text } from "@chakra-ui/react";
import ExpampleTabs from "../components/ExampleTabs";
import NewWordBox from "../components/NewWordBox";
import TaskBox from "../components/TaskBox";
import { connect } from "react-redux";
import {GetNewWordThunkCreator} from '../reducers/reducer';

function LearnPage(props) {
    console.log(props)
    
    return (
        <Container align='center' mt='30px' p='15px' bgColor='#EBF8FF' borderRadius='16px' maxW='1000px'>
            <Text fontSize='2xl' as='b'>Your new word is:</Text>
            <NewWordBox 
                newWord={props.learnPage.newWord} 
                newWordTranslation={props.learnPage.newWordTranslation}
                partOfSpeech={props.learnPage.newWordInfo.partOfSpeech}
                level={props.learnPage.newWordInfo.level}
                my='15px' />

            <Text fontSize='2xl' as='b'>Examples: </Text>
            <Flex flexDirection='column' bgColor='white' borderRadius='16px'>

                <ExpampleTabs 
                    examples={props.learnPage.examplesWithNewWord}
                    examplesTranslation={props.learnPage.examplesWithNewWordTranslation}
                    />
            </Flex>

            <Text fontSize='2xl' as='b'>Task: </Text>
           
            <TaskBox/>
        </Container>
    )
}

function mapStateToProps(state) {
    return { learnPage: state.bilingoPage.learnPage }
}

const LearnPageContainer = connect(mapStateToProps, {GetNewWordThunkCreator})(LearnPage);
export default LearnPageContainer;
