import { Box, Button, Container, Flex, Image, Spacer, Text } from "@chakra-ui/react";

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

                <Flex bg='#DEEEFF' flex='1' borderRadius='20px' justifyContent='start' p='15px'>
                    <Box textAlign='left'>
                        <Text><b>Name:</b></Text>
                        <Text><b>Surname:</b></Text>
                        <Text><b>Email:</b></Text>
                        <Text><b>Age:</b></Text>
                    </Box>

                    <Spacer/>
                    
                    <Button alignSelf='end' color='white' bg='#5DAAD3' _hover={{ bg: "#7DB5D3" }}>Edit</Button>
                </Flex>

               
                
            </Flex>

            <Flex bg='#DEEEFF' flex='1' borderRadius='20px' justifyContent='start' p='15px' mt='15px'>
                Stats
            </Flex>
        </Container>
    )
}

export default ProfilePage;