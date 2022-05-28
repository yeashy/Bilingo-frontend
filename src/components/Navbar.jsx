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

function Navbar(props) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleToggle = () => (isOpen ? onClose() : onOpen());
    const navigate = useNavigate();

    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding={6}
            bg="#5DAAD3"
            color="white"
            {...props}
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
                <Link to='/learn'>Learn</Link>
                <Link to='/repeat'>Repeat</Link>

                <Link to='/profile'>Profile</Link> {/*В будущем Link должен быть доступен только авторизованным пользователям*/}

            </Stack>

            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                mt={{ base: 4, md: 0 }}
            >
                <Button
                    mr='15px'
                    onClick={() => {navigate('/signIn')}}
                    variant="outline"
                    _hover={{ bg: "#7DB5D3" }}
                >
                    Sign in
                </Button>

                <Button
                    onClick={() => {navigate('/signUp')}}
                    variant="outline"
                    _hover={{ bg: "#7DB5D3" }}
                >
                    Sign Up
                </Button>
            </Box>
        </Flex>
    );
};

export default Navbar;
