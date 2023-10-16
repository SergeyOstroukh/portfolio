import React from 'react';
import {SkillItem} from "./skillItem/skillItem";
import airPlane from '../../../assets/images/sprite.svg'
import {Name} from "../../styledUniversalComponents/name";
import styled from "styled-components";
import {StyledFlexWrapper} from "../../flexWrapper/flexWrapper";

export const Skills = () => {

    const skills =[
        {icon:airPlane, skillName:'Html5', description:'blabalbalba' },
        {icon:airPlane, skillName:'styledComponents', description:'blabalbalba' },
        {icon:airPlane, skillName:'GITHUB', description:'blabalbalba' }
    ]

    return (
        <SkillsWrapperContainer >
            <StyledFlexWrapper direction={'column'} align={'center'}>
                <div>
                    <Name>My skills</Name>
                </div>
                <SkillsContainer>
                    {skills.map(el=>{
                        return(
                            <SkillItem icon={el.icon} skillName={el.skillName} description={el.description}/>
                        )
                    })}
                </SkillsContainer>


            </StyledFlexWrapper>
        </SkillsWrapperContainer>
    );
};

const SkillsWrapperContainer = styled.div`
    background-color: rosybrown;
`
const SkillsContainer = styled.div`
display: flex;
  border: 3px solid red;
  gap: 25px;
  justify-content: space-around;
`
