import {Button, Container, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

function SignUpPage() {
    return (

        <Container mt='30px'>
            <Text fontSize='5xl'>Sign Up</Text>
            <FormControl>
                <FormLabel htmlFor='login'>Login</FormLabel>
                <Input id='login' type='login' />

                <FormLabel mt='15px' htmlFor='password'>Password</FormLabel>
                <Input id='password' type='password' />

                <FormLabel mt='15px' htmlFor='password'>Repeat password</FormLabel>
                <Input id='repeatPassword' type='password' />

                <Flex alignItems='center'>
                    <Button mt='15px'>Sign Up</Button>
                </Flex>

            </FormControl>
        </Container>
    )
}

export default SignUpPage;