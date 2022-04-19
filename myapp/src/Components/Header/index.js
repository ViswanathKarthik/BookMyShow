import React from 'react'
import { Div, Events, LeftDiv, LeftSide, Movies, RightDiv, RightSide, Stream } from './Headerelements'

const Header = () => {
  return (
    <Div>
      <LeftDiv>
        <LeftSide>Movies</LeftSide>
        <LeftSide>Stream</LeftSide>
        <LeftSide>Events</LeftSide>
        <LeftSide>Plays</LeftSide>
        <LeftSide>Sports</LeftSide>
        <LeftSide>Activities</LeftSide>
        <LeftSide>Buzz</LeftSide>
      </LeftDiv>
      <RightDiv>
        <RightSide>ListYourShow</RightSide>
        <RightSide>Coporates</RightSide>
        <RightSide>Offers</RightSide>
        <RightSide>Giftcards</RightSide>
      </RightDiv>
    </Div>
  )
}

export default Header