import { Flex, Tab, TabList, TabPanels, Tabs, TabPanel, Text } from "@chakra-ui/react";

function ExpampleTabs(props) {

    return (
        <Tabs align='center'>
            <TabList >
                {props.examples.map((val, index) => {
                    return (
                        <Tab key={index}>{index + 1}</Tab>
                    )
                })}
            </TabList>


            <TabPanels>
                {props.examples.map((val, index) => {
                    return (
                        <TabPanel key={val}>
                            <Flex flexDirection='column'>
                                <Text fontSize='2xl'>{val}</Text>

                                <Text fontSize='2xl' mt='15px'>{props.examplesTranslation[index]}</Text>
                            </Flex>
                        </TabPanel>
                    )
                })}
            </TabPanels>
        </Tabs>
    )
}

export default ExpampleTabs;