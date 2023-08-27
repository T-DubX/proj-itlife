import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {MemberTeam} from "./memberTeam/MemberTeam";

import developerImg from '../../assets/images/photo-developer.jpg';

import artistImg from '../../assets/images/photo-artist.jpg';

import graphecDesignerImg from '../../assets/images/photo-graphic-desinger.jpg'

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
    
`

const Title = styled.h2`

`

const Description = styled.p`

`

const WrapperTeamMembers = styled.div`
    
`

