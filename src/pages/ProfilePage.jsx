import { Box, Button, Container, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { connect } from "react-redux";
import {GetProfileDetailsThunkCreator} from '../reducers/reducer';
function ProfilePage(props) {
    const profile = props.profile;
    return (
        <Container mt='30px' maxW='1000px'>
            <Flex>
                <Box mr='20px'>
                    <Image
                        src={profile.avatarURL}
                        width='200px'
                        height='200px'
                        borderRadius='20px'
                        alt='Profile Image'
                    />
                </Box>

                <Flex bg='#DEEEFF' flex='1' borderRadius='20px' justifyContent='start' p='15px'>
                    <Box textAlign='left'>
                        <Text><b>Nickname:</b> {profile.nickname}</Text>
                        <Text><b>Fullname:</b> {profile.fullname}</Text>
                        <Text><b>Email:</b> {profile.email}</Text>
                        <Text><b>Gender:</b> {profile.gender}</Text>
                        <Text><b>Level:</b> {profile.level}</Text>
                    </Box>

                    <Spacer />

                    <Button alignSelf='end' color='white' bg='#5DAAD3' _hover={{ bg: "#7DB5D3" }}>Edit</Button>
                </Flex>



            </Flex>

            <Flex bg='#DEEEFF' flex='1' borderRadius='20px' justifyContent='start' p='15px' mt='15px'>
                Stats
            </Flex>
        </Container>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return { profile: state.bilingoPage.profile }
}

const ProfilePageContainer = connect(mapStateToProps, {GetProfileDetailsThunkCreator})(ProfilePage);
export default ProfilePageContainer;