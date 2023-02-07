import { Box, Button, Container, FormControl, FormLabel, Input, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import secureLocalStorage from 'react-secure-storage'

function SignUp() {

    const [ username, setUsername ] = React.useState("")
    const [ pass1, setPass1 ] = React.useState<any>()
    const [ pass2, setPass2 ] = React.useState<any>()
    const navigate = useNavigate()

    const getInfo =()=>{
        console.log(localStorage.getItem("username"));
        if(pass1 === pass2 && localStorage.getItem("username") !== username.toLowerCase()){
            localStorage.setItem("username", username.toLowerCase())
            localStorage.setItem("pass", pass1)
            console.log(localStorage.getItem("username"));
            navigate("/Home")
        }
    }

    return (
    <SimpleGrid alignSelf="center" gridTemplateRows={"auto 1fr auto"}>
        <Container display={"inline-flex"} flexDir={"column"} gap={10} >
            <FormControl isRequired>
                <FormLabel> اسم المستخدم</FormLabel>
                <Input onChange={e =>{setUsername(e.target.value)}} placeholder='اسم المستخدم' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel> كلمة المرور</FormLabel>
                <Input onChange={e =>{setPass1(e.target.value)}} placeholder='كلمة المرور' />
            </FormControl>
            <FormControl isRequired>
                <FormLabel> أعد كلمة المرور</FormLabel>
                <Input onChange={e =>{setPass2(e.target.value)}} placeholder='أعد كلمة المرور' />
            </FormControl>
            <Button type='submit' onClick={getInfo} colorScheme='green'>تسجيل جديد</Button>

        </Container>
    </SimpleGrid>
  )
}

export default SignUp