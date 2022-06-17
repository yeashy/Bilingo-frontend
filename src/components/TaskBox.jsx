import { Flex,Text,Input,Button } from "@chakra-ui/react";
import { useState } from "react";


function TaskBox(props){
    const [inputValue, setInputValue] = useState('')

    function handleClick(event){
        
        setInputValue((current) => {
            if(current.search(event.target.value) !== -1) {
                return current.replace(event.target.value + ' ', '')
            }

            return current + event.target.value + ' ';
        })
    }

    return(
        <Flex flexDirection='column' bgColor='white' borderRadius='16px' p='16px'>
        <Text >Make a sentence with this word!</Text>
        <Input size='lg' value={inputValue} isReadOnly/>

        <Flex mt='15px' gap='15px' justifyContent='center'>

            {props.exercise.sentenceRandomOrder.map((word, index) => {
                return <Button isActive={false} key={word + index} onClick={handleClick} value={word}>{word}</Button>
            })}
            
        </Flex>
    </Flex>
    )

}

export default TaskBox;