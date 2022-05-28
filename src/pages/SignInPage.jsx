import { Text, Button, Container, Flex, FormControl, FormLabel, Input, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SignInPage() {
    return (
        <Container mt='30px'>
             <Text fontSize='5xl'>Sign in</Text>
            <FormControl>
                <FormLabel htmlFor='login'>Login</FormLabel>
                <Input id='login' type='login'/>

                <FormLabel mt='15px' htmlFor='password'>Password</FormLabel>
                <Input id='password' type='password'/>

                <Flex alignItems='center'>
                    <Button mt='15px'>Sign in</Button>
                    <Spacer/>
                    <Link to='/signUp'>Don't have an account?</Link>
                </Flex>
                
            </FormControl>
        </Container>
    )
}

export default SignInPage;