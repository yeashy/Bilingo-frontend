import { Box, Button, Container, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { connect, useDispatch } from "react-redux";
import { GetProfileDetailsThunkCreator } from '../reducers/reducer';
import { useEffect } from "react";

function ProfilePage(props) {
    const profile = props.profile;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(GetProfileDetailsThunkCreator());
    }, [])

    if (localStorage.getItem('token')) {

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
                            <Text><b>First Name:</b> {profile.firstName}</Text>
                            <Text><b>LastName:</b> {profile.lastName}</Text>
                            <Text><b>Email:</b> {profile.email}</Text>
                            <Text><b>Gender:</b> {profile.gender}</Text>
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
    else {
        return (<div>Please, Sign In</div>)
    }
}

function mapStateToProps(state) {
    return { profile: state.bilingoPage.profile }
}

const ProfilePageContainer = connect(mapStateToProps, { GetProfileDetailsThunkCreator })(ProfilePage);
export default ProfilePageContainer;