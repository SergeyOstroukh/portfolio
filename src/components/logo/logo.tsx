import React from 'react';
import {Icon} from "../icon/icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledA>
            <Icon iconId={'logo'}/>
            <div>Portfolio</div>
        </StyledA>
    );
};

const StyledA = styled.a`
    display: flex;
  align-items: center;
`