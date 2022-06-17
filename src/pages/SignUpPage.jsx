import {
    Button, Container, Flex, FormControl, FormLabel,
    Input, Text, Box, NumberInput, NumberInputField, NumberInputStepper,
    NumberIncrementStepper, NumberDecrementStepper, Select
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { RegisterThunkCreator } from "../reducers/reducer";

function SignUpPage() {
    const dispatch = useDispatch()
    const email = useRef()
    const password = useRef()
    const firstname = useRef()
    const lastname = useRef()
    const age = useRef()
    const gender = useRef()

    function handleRegister() {
        const data = {
            email: email.current.value,
            password: password.current.value,
            firstName: firstname.current.value,
            lastName: lastname.current.value,
            age: age.current.value,
            gender: gender.current.value
        }

        dispatch(RegisterThunkCreator(data));
    }
    return (

        <Container mt='30px'>
            <Text fontSize='5xl'>Sign Up</Text>
            <FormControl>
                <FormLabel htmlFor='nickname'>Firstname</FormLabel>
                <Input id='nickname' type='Firstname' ref={firstname}/>

                <FormLabel mt='15px' htmlFor='fullname'>Lastname</FormLabel>
                <Input id='fullname' type='Lastname' ref={lastname}/>

                <FormLabel mt='15px' htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' ref={email} />

                <Flex mt='15px' gap='15px'>
                    <Box>
                        <FormLabel htmlFor='age' >Age</FormLabel>
                        <NumberInput  defaultValue={18} min={1} max={140} >
                            <NumberInputField ref={age}/>
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>

                    <Box flexGrow='1'>
                        <FormLabel htmlFor='gender'>Gender</FormLabel>
                        <Select ref={gender}>
                            <option value={0}>Male</option>
                            <option value={1}>Female</option>
                        </Select>
                    </Box>
                </Flex>

                <FormLabel mt='15px' htmlFor='password'>Password</FormLabel>
                <Input id='password' type='password' ref={password}/>

                <FormLabel mt='15px' htmlFor='password'>Repeat password</FormLabel>
                <Input id='repeatPassword' type='password' />

                <Flex alignItems='center'>
                    <Button mt='15px' onClick={() => {handleRegister()}}>Sign Up</Button>
                </Flex>

            </FormControl>
        </Container>
    )
}

export default SignUpPage;