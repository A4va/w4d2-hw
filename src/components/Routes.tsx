import React from 'react'
import SignUp from './SignUp'
import Welcome from './Welcome'

import { Routes as Routess, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SignIn from './SignIn'

function Routes() {
  return (
    <Routess>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/Home" element={<HomePage/>}></Route>

    </Routess>
  )
}

export default Routes