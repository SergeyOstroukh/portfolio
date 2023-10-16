import React, {FC} from 'react';
import {Icon} from "../../../icon/icon";
import styled from "styled-components";

type SkillItem = {
    icon:string
    skillName:string
    description:string
}
export const SkillItem:FC<SkillItem> = ({icon,skillName,description}) => {
    return (
        <Skill>
            <img src={icon} alt={'oops'}/>
            <h3>{skillName}</h3>
            <span>{description}</span>
        </Skill>
    );
};

const Skill = styled.div`
  align-items: center;
  `