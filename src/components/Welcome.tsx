import React from 'react'
import { Container, Box, Text, Heading, Flex, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate()
    const toSignUp =()=> {navigate("/SignUp")}
    const toSignIn =()=> {navigate("/SignIn")}
  return (
    <Container pt={250} pb={250}>
        <Box textAlign={"center"} mb={12}>
        <Heading mb={3}>الله</Heading>
        <Text fontSize='2xl'>اللي عزنا مال أحد منة</Text>
        </Box>
        <Flex flexWrap={"wrap"} justifyContent={"center"} gap={10}>
        <Button onClick={toSignUp} colorScheme='green'>تسجيل جديد</Button>
        <Button onClick={toSignIn} colorScheme='green'>تسجيل دخول</Button>
        </Flex>
        
    </Container>
  )
}

export default Welcome