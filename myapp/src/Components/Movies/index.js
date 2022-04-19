import React from "react";
import {
  Bottom,
  Div,
  Image,
  ImageDiv,
  MainDiv,
  Middle,
  Movie,
  Movie2,
  Movie3,
  Movie4,
  Movie5,
  MovieNames,
  Text,
} from "./Movieselement";
import M1 from "../../Images/beast.jpg";
import M2 from "../../Images/Kgf.jpg";
import M3 from "../../Images/doctor.jpg";
import M4 from "../../Images/rrr.jpg";
import M5 from "../../Images/dumble.jpg";

const Movies = () => {
  return (
    <MainDiv>
      <Div>Recommended Movies</Div>
      <Middle>
        <ImageDiv>
          <Image src={M1}></Image>
          <Movie> 
            DoctorStrange: In The <br></br>Multi-Universe
          </Movie>
        </ImageDiv>
        <ImageDiv>
          <Image src={M2}></Image>
          <Movie>
            
            RRR
          </Movie>
        </ImageDiv>
        <ImageDiv>
          <Image src={M3}></Image>
          <Movie>
            
           Beast
          </Movie>
        </ImageDiv>
        <ImageDiv>
          <Image src={M4}></Image>
          <Movie>
            
            K.G.F Chapter-2
          </Movie>
        </ImageDiv>
        <ImageDiv>
          <Image src={M5}></Image>
          <Movie>
        
           The sectres of Dumble
          </Movie>
        </ImageDiv>
      </Middle>
      
    </MainDiv>
  );
};

export default Movies;
