import React from 'react';
import styled from "styled-components";
import myPhoto from '../../../assets/images/myFoto.png'
import {StyledFlexWrapper} from "../../flexWrapper/flexWrapper";
import {Name} from "../../styledUniversalComponents/name";

export const Main = () => {
    return (
        <StyledMain>
            <StyledFlexWrapper  align={'center'} justify={'space-around'}>
               <div>
                   <span style={{color:'white'}}>Hi There</span>
                   <Name>I'm a Sergey Ostroukh</Name>
                   <MainTitle>A Web Developer</MainTitle>
                   <button>
                       Let’s Begin
                   </button>
               </div>
            <div>
                <Photo src={myPhoto}/>
            </div>
            </StyledFlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: #0F1624;

`

const Photo = styled.img`
width: 300px;
height: 300px;
  object-fit: cover;
`
const MainTitle = styled.h1`
color: white;
`
