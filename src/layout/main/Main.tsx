import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {MemberTeam} from "./memberTeam/MemberTeam";

import developerImg from '../../assets/images/photo-developer.jpg';

import artistImg from '../../assets/images/photo-artist.jpg';

import graphecDesignerImg from '../../assets/images/photo-graphic-desinger.jpg'
import {theme} from "../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Title>
                    who we are
                </Title>

                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>

                <WrapperTeamMembers>
                    <MemberTeam name={'John Handson'} profession={'Lead designer'} photo={developerImg}/>
                    <MemberTeam name={'Alex Cutter'} profession={'Developer'} photo={developerImg}/>
                    <MemberTeam name={'Elena Simpson'} profession={'Artist'} photo={artistImg}/>
                    <MemberTeam name={'Lily Allen'}  profession={'Graphic Designer'} photo={graphecDesignerImg}/>
                </WrapperTeamMembers>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
  background-color: ${theme.colors.secondary};
  padding: 150px 0 150px;
  
  ${Container} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.h2`
  color: ${theme.colors.font};
  /* title */
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 4.42px;
  text-transform: uppercase;
  
  position: relative;
  
  &::after {
    content: '';
    display: inline-block;
    width: 45px;
    height: 4px;
    background-color: #DDDBDB;

    position: absolute;
    right: 50%;
    bottom: 0;
    transform: translate(50%, 20px);
  }
`

const Description = styled.p`

  color: ${theme.colors.font};
  text-align: center;

  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  max-width: 570px;

  margin: 65px 0 60px;
`

const WrapperTeamMembers = styled.div`
  display: flex;
  gap: 30px;
`

