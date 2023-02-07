import { Box, Button, Container, FormControl, FormLabel, Input, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import secureLocalStorage from 'react-secure-storage'

function SignIn() {

    const [ username, setUsername ] = React.useState("")
    const [ pass, setPass ] = React.useState<any>()
    const navigate = useNavigate()

    const getInfo =()=>{
        console.log(localStorage.getItem("username"));
        if(localStorage.getItem("username") === username.toLowerCase() && localStorage.getItem("pass") === pass){
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
                <Input onChange={e =>{setPass(e.target.value)}} placeholder='كلمة المرور' />
            </FormControl>
            <Button type='submit' onClick={getInfo} colorScheme='green'>تسجيل دخول</Button>

        </Container>
    </SimpleGrid>
  )
}

export default SignIn