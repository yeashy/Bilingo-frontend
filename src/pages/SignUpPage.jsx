import {
    Button, Container, Flex, FormControl, FormLabel,
    Input, Text, Box, NumberInput, NumberInputField, NumberInputStepper,
    NumberIncrementStepper, NumberDecrementStepper, Select
} from "@chakra-ui/react";

function SignUpPage() {
    return (

        <Container mt='30px'>
            <Text fontSize='5xl'>Sign Up</Text>
            <FormControl>
                <FormLabel htmlFor='nickname'>Nickname</FormLabel>
                <Input id='nickname' type='login' />

                <FormLabel mt='15px' htmlFor='fullname'>Fullname</FormLabel>
                <Input id='fullname' type='fullname' />

                <FormLabel mt='15px' htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' />

                <Flex mt='15px' gap='15px'>
                    <Box>
                        <FormLabel htmlFor='age'>Age</FormLabel>
                        <NumberInput defaultValue={18} min={1} max={140}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>

                    <Box flexGrow='1'>
                        <FormLabel htmlFor='gender'>Gender</FormLabel>
                        <Select >
                            <option value='0'>Male</option>
                            <option value='1'>Female</option>
                        </Select>
                    </Box>
                </Flex>

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