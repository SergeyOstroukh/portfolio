import React from 'react';
import styled from "styled-components";
import {Logo} from "../../logo/logo";
import {Menu} from "./menu/menu";
import {Contacts} from "./contacts/contacts";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <Contacts/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #baf1a7;
  display: flex;
  justify-content: space-around;
`