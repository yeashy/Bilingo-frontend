import React from "react";
import {
    Box,
    Stack,
    Heading,
    Flex,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { LoginThunkCreator, LogoutThunkCreator } from '../reducers/reducer';
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

function Navbar(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function handleLogout(){
        dispatch(LogoutThunkCreator())
    }

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="#5DAAD3"
            color="white"

        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Billingo
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                brgr
            </Box>

            <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                width={{ base: "full", md: "auto" }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >

                <Link to='/'>Home</Link>

                {localStorage.getItem('token') ? <>
                    <Link to='/learn'>Learn</Link>
                    <Link to='/repeat'>Repeat</Link>

                    <Link to='/profile'>Profile</Link></> : <></>}


            </Stack>



            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >

                {localStorage.getItem('token') ? <>
                <Button
                        mr='15px'
                        onClick={() => {handleLogout()}}
                        variant="outline"
                        _hover={{ bg: "#7DB5D3" }}
                    >
                        Logout
                    </Button>
                    </> : <><Button
                        mr='15px'
                        onClick={() => { navigate('/signIn') }}
                        variant="outline"
                        _hover={{ bg: "#7DB5D3" }}
                    >
                        Sign in
                    </Button>

                    <Button
                        onClick={() => { navigate('/signUp') }}
                        variant="outline"
                        _hover={{ bg: "#7DB5D3" }}
                    >
                        Sign Up
                    </Button></>}

                </Box>
        </Flex>
    );
};

function mapStateToProps(state) {
    return { profile: state.bilingoPage.profile }
}

const NavbarContainer = connect(mapStateToProps, { LoginThunkCreator, LogoutThunkCreator })(Navbar);
export default NavbarContainer;
