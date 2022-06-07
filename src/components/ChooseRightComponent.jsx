import { Flex, Text, Button } from "@chakra-ui/react";

function ChooseRightComponent() {
    return (
        <Flex flexDirection='column' bgColor='white' borderRadius='16px' p='16px' mt='15px' align='center'>
            <Text mb='15px' fontSize='2xl'>Choose the right {"{synonim/description}"}</Text>
            <Flex alignSelf='stretch'gap='15px' flexDirection='column' flexGrow={1}>


                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
            </Flex>
        </Flex>
    )
}

export default ChooseRightComponent;