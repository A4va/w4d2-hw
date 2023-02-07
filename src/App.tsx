import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Routes from './components/Routes'
import Footer from './components/Footer'
import { SimpleGrid } from "@chakra-ui/react"


function App() {

  return (
    <SimpleGrid minH={"100vh"} gridTemplateRows={"auto 1fr auto"}>
      <Nav/>
      <Routes/>
      <Footer/>
    </SimpleGrid>
  )
}

export default App
