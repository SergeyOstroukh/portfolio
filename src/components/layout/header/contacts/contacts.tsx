import React from 'react';
import {Icon} from "../../../icon/icon";
import styled from "styled-components";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Icon iconId={'github'} height={'32'}width={'32'}/>
            <Icon iconId={'linkedin'} height={'32'}width={'32'}/>
            <Icon iconId={'airPlaine'} height={'32'}width={'32'}/>
        </StyledContacts>
    );
};

const StyledContacts = styled.div`
display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
 
 
  border: 1px solid red;
`