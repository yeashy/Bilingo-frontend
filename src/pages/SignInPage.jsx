import { Text, Button, Container, Flex, FormControl, FormLabel, Input, Spacer } from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LoginThunkCreator } from "../reducers/reducer";

function SignInPage() {
    
    const login = useRef()
    const pass = useRef()
    const dispatch = useDispatch()
    function handleClick(){
        dispatch(LoginThunkCreator(login.current.value, pass.current.value))
    }
    return (
        <Container mt='30px'>
             <Text fontSize='5xl'>Sign in</Text>
            <FormControl>
                <FormLabel htmlFor='login'>Email or Nickname</FormLabel>
                <Input id='login' type='login' ref={login}/>

                <FormLabel mt='15px' htmlFor='password'>Password</FormLabel>
                <Input id='password' type='password' ref={pass}/>

                <Flex alignItems='center'>
                    <Button mt='15px' onClick={handleClick}>Sign in</Button>
                    <Spacer/>
                    <Link to='/signUp'>Don't have an account?</Link>
                </Flex>
                
            </FormControl>
        </Container>
    )
}

export default SignInPage;