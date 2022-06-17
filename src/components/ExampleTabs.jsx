import { Flex, Tab, TabList, TabPanels, Tabs, TabPanel, Text } from "@chakra-ui/react";
import parse from "html-react-parser";
function ExpampleTabs(props) {

    return (
        <Tabs align='center'>
            <TabList >
                {props.examples.slice(0, 3).map((val, index) => {
                    return (
                        <Tab key={index}>{index + 1}</Tab>
                    )
                })}
            </TabList>


            <TabPanels>
                {props.examples.slice(0, 3).map((val, index) => {
                    return (
                        <TabPanel key={val.value}>
                            <Flex flexDirection='column'>
                                <Text fontSize='2xl'>{parse(val.value)}</Text>

                                <Text fontSize='2xl' mt='15px'>{parse(val.translation)}</Text>
                            </Flex>
                        </TabPanel>
                    )
                })}
            </TabPanels>
        </Tabs>
    )
}

export default ExpampleTabs;