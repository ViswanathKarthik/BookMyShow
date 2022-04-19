import React from 'react'
import { Button, City, Div, LeftDiv, Logo, RightDiv, SearchBar, SearchDiv, Signin } from './NavBarelements'
import {FaSearch} from "react-icons/fa";

const NavBar = () => {
  return (
  <Div>
      <LeftDiv>
          <Logo> Bookmyshow</Logo>
        <SearchDiv>
            <FaSearch  color="black"/>
        </SearchDiv>

        <SearchBar  type="text"
                    placeholder=" Search for Movies,Events,Plays,Sports and Activities"
                    />

      </LeftDiv>
      <RightDiv>
          <City>Hyderabad</City>
          <Signin>Sign in</Signin>

      </RightDiv>
  </Div> )
}

export default NavBar