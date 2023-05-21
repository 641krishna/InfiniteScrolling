import React, { useContext, useState } from 'react'
import { Box, Button, Card, CardBody, Center, FormControl, FormLabel, Heading, Input, Stack, VStack } from '@chakra-ui/react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../ContextAPI/AuthContextProvider'

const Login = () => {

    // const { state, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value })
    }

    const handleSubmit = () => {
        const { username, password } = input;
        // console.log(username)
        if (!username || !password) {
            alert("Enter all Credentials")
        } else if (username === "Krishna" && password === "123") {
            navigate('/home')
        } else {
            alert("Please Enter Correct Values")
        }
    }


    return (
        <Box>
            <Center>
                <Stack>
                    <VStack as='header' spacing='6' mt='8'>
                        <Heading as='h1' fontWeight='500' fontSize='24px'>
                            Login
                        </Heading>
                    </VStack>

                    <Card bg='#f6f8fa' variant='outline' borderColor='#d8dee4' size='m' width='310px' padding='20px' borderRadius='6px'>
                        <CardBody>
                            <form>
                                <Stack spacing='4'>
                                    <FormControl>
                                        <FormLabel size='sm'>Username</FormLabel>
                                        <Input type='text' name='username' value={input.username} bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' onChange={handleChange} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel size='sm'>Password</FormLabel>
                                        <Input type='password' name='password' value={input.password} bg='white' borderColor='#d8dee4' size='sm' borderRadius='6px' onChange={handleChange} />
                                    </FormControl>
                                    <Button bg='#2da44e' color='white' mt='2px' size='sm' _hover={{ bg: '#2c974b' }} onClick={handleSubmit}>Login</Button>
                                </Stack>
                            </form>
                        </CardBody>
                    </Card>
                </Stack>
            </Center>
        </Box >
    )
}

export default Login