import styled from "styled-components";

type StyledFlexWrapper = {
    direction?:string
    align?:string
    justify?:string

}

export const StyledFlexWrapper = styled.div<StyledFlexWrapper>`
  display: flex;
  flex-direction: ${props => props.direction};
  align-items:${props => props.align};
  justify-content:${props => props.justify} ;

`


