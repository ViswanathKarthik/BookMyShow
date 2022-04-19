import styled from "styled-components";

 


export const Div=styled.div`
display flex;
max-height:64px;
margin:0;
background-color:#333545;


`
export const LeftDiv=styled.div`
display flex;
flex:0.65;
color:white;
margin:0;
margin-left:150px;
// font-family: "Times New Roman", Times, serif;
font-family: 'Square Peg', cursive;

align-items:center;
`
export const RightDiv=styled.div`
display flex;
color:white;

flex:0.35;

margin:0;
margin-left:250px;
align-items:center;
font-family: 'Square Peg', cursive;
`
export const Logo=styled.h1`
padding-right:10px;
&:hover {
    color: red;
    cursor:pointer;
  }

// font-family: Georgia, serif;
// font-family: Arial, Helvetica, sans-serif;
//font-family: Comic Sans MS, Comic Sans, cursive;

`
export const SearchBar=styled.input`
 display: block;
 width: 528px;
height: 36px;


background:white;
outline:none;
line-height:500px;
 border-radius: 0px 4px 4px 0px;
 border-left:none;
 border:none;
 box-sizing: border-box;

   
`


export const SearchDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:#CCCCCC;;
height:36px;
width:30px;
 border-radius: 4px 0px 0px 4px;
 margin-top:1px;
 cursor:pointer;
`



export const City=styled.h1`
margin:5px;
padding-right:20px;
font-size:14px;
font-family: Roboto,sans-serif;
color:#CCCCCC;
font-weight:400;



&:hover {
    color: #fff;
    cursor:pointer;
  }
`
export const Signin=styled.div`
display: flex;
justify-content:center;
align-items:center;
 width: 67px;
height: 25px;
font-size:12px;
color:white;
background-color:#F84464;
border: 1px solid rgb(248, 68, 100);

font-family: Roboto,sans-serif;

 border-radius: 4px;
 box-sizing: border-box;
`