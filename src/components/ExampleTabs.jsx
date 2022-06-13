import { Flex, Tab, TabList, TabPanels, Tabs, TabPanel, Text } from "@chakra-ui/react";

function ExpampleTabs() {
    return (
        <Tabs align='center'>
            <TabList >
                <Tab>1</Tab>
                <Tab>2</Tab>
                <Tab>3</Tab>
            </TabList>


            <TabPanels>
                <TabPanel padding="0 100px">
                    <Flex flexDirection='column'>
                        <Text fontSize='2xl'>Yesterday I arrived in London by airplane.</Text>
                        <hr />
                        <Text fontSize='2xl' mt='15px'>Вчера я прилетел в Лондон на самолете.</Text>
                    </Flex>
                </TabPanel>
                <TabPanel>
                    2
                </TabPanel>
                <TabPanel>
                    3
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default ExpampleTabs;