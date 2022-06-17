import {Container, Flex, Text } from "@chakra-ui/react";
import ExpampleTabs from "../components/ExampleTabs";
import NewWordBox from "../components/NewWordBox";
import { connect } from "react-redux";
import {GetNewWordThunkCreator} from '../reducers/reducer';
import { useEffect } from "react";

import TaskWrapper from "../components/TaskWrapper";

function LearnPage(props) {
    
   
    useEffect(() => {
      props.GetNewWordThunkCreator();
    }, [])
    
    return (
        <Container align='center' mt='30px' p='15px' bgColor='#EBF8FF' borderRadius='16px' maxW='1000px'>
            <Text fontSize='2xl' as='b'>Your new word is:</Text>
            <NewWordBox 
                newWord={props.learnPage.word} 
                newWordTranslation={props.learnPage.translations[0]}
                partOfSpeech={props.learnPage.partsOfSpeech[0]}
                level={props.learnPage.level}
                my='15px' />

            <Text fontSize='2xl' as='b'>Examples: </Text>
            <Flex flexDirection='column' bgColor='white' borderRadius='16px'>
                <ExpampleTabs examples={props.learnPage.examples}/>
                
            </Flex>

            <Text fontSize='2xl' as='b'>Task: </Text>
           
            
            <TaskWrapper exercise={props.exercise}/>
    </Container>
    )
}

function mapStateToProps(state) {
    return { learnPage: state.bilingoPage.learnPage, exercise : state.bilingoPage.exercise }
}

const LearnPageContainer = connect(mapStateToProps, {GetNewWordThunkCreator})(LearnPage);
export default LearnPageContainer;
