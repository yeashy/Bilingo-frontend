import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";

function ProfilePage() {
    return (
        <Container mt='30px' maxW='1000px'>
            <Flex>
                <Box mr='20px'>
                    <Image
                        src='https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
                        width='200px'
                        height='200px'
                        borderRadius='20px'
                        alt='Profile Image'
                    />
                </Box>

                <Flex bg='#DEEEFF' flex='1' borderRadius='20px' justifyContent='space-between' p='15px'>
                    <Flex alignItems="start" height="full" direction="column" justifyContent="space-between">
                        <Box textAlign="left">
                            <Text><b>Nickname</b></Text>
                            <Text>nickname</Text>
                        </Box>
                        <Box textAlign="left">
                            <Text><b>Fullname</b></Text>
                            <Text>John Doe</Text>
                        </Box>
                        <Box textAlign="left">
                            <Text><b>Email</b></Text>
                            <Text>example@email.com</Text>
                        </Box>
                    </Flex>

                    <Flex alignItems="start" height="full" direction="column" justifyContent="space-between">
                    <Box textAlign="left">
                            <Text><b>Age</b></Text>
                            <Text>21</Text>
                        </Box>
                        <Box textAlign="left">
                            <Text><b>Gender</b></Text>
                            <Text>Male</Text>
                        </Box>
                        <Box textAlign="left">
                            <Text><b>Level</b></Text>
                            <Text>B1</Text>
                        </Box>
                    </Flex>

                    <Flex>
                        <Button alignSelf='end' color='white' bg='#00B5D8' _hover={{ bg: "#7DB5D3" }} mr="10px">Edit data</Button>
                        <Button alignSelf='end' color='white' bg='#C53030' _hover={{ bg: "#FF5353" }}>Remove Account</Button>
                    </Flex>
                </Flex>
            </Flex>

            <Flex bg='#DEEEFF' flex='1' borderRadius='20px' justifyContent='start' p='15px' mt='15px'>
                Stats
            </Flex>
        </Container>
    )
}

export default ProfilePage;