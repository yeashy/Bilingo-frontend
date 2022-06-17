import { Container, Text, Flex } from "@chakra-ui/react";
import { connect } from "react-redux";
import ChooseRightComponent from "../components/ChooseRightComponent";

import ListenAndTypeComponent from "../components/ListenAndTypeComponent";
import TaskBox from "../components/TaskBox";
import {GetKnownWordThunkCreator, GetRandomExerciseThunkCreator} from '../reducers/reducer';

function RepeatPage(props) {

    return (
        <Container align='center' mt='30px' p='15px' bgColor='#EBF8FF' borderRadius='16px' maxW='1000px'>
            <Text fontSize='2xl' as='b'>Time to repeat the word:</Text>

            <Flex borderRadius='16px' flexDirection='column' maxW='500px' >
                <Text as='b' fontSize='5xl'>{props.repeatPage.knownWord}</Text>
            </Flex>

            <Text fontSize='2xl' as='b'>Task: </Text>

            <TaskBox />
            <ListenAndTypeComponent />
            <ChooseRightComponent />
        </Container>
    )
}

function mapStateToProps(state) {
    return { repeatPage: state.bilingoPage.repeatPage }
}

const RepeatPageContainer = connect(mapStateToProps, {GetKnownWordThunkCreator})(RepeatPage);
export default RepeatPageContainer;
