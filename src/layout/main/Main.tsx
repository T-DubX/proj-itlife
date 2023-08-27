import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {TeamMember} from "./teamMember/TeamMember";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <Title>

                </Title>

                <Description>

                </Description>

                <WrapperTeamMembers>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                </WrapperTeamMembers>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    
`

