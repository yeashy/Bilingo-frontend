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
            padding={3}
            bg="#00B5D8"
            color="white"
            height="60px"
            {...props}
        >
            <Flex align="center" mr={5}>
                <Heading as="h1" size="lg" letterSpacing={"tighter"}>
                    Bilingo
                </Heading>
            </Flex>

            <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
                brgr
            </Box>

            <Stack
                direction={{ base: "column", md: "row" }}
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                alignItems="center"
                flexGrow={1}
                mt={{ base: 4, md: 0 }}
            >
                <Link to='/' className="header_link">Main</Link> {/*В будущем Link должен быть доступен только авторизованным пользователям*/}
                <Link to='/learn' className="header_link">Learn!</Link>
                <Link to='/repeat' className="header_link">Repeat!</Link>
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
