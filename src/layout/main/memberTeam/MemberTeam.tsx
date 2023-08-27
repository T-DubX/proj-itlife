import React from 'react';
import styled from "styled-components";

type MemberTeamPropsType = {
    name: string
    profession: string
    photo?: string
}

export const MemberTeam = (props: MemberTeamPropsType) => {
    return (
        <StyledMemberTeam>
            <WrapperPhoto>
                <Photo src={props.photo} alt=""/>
            </WrapperPhoto>
            <Name>{props.name}</Name>
            <Profession>{props.profession}</Profession>
        </StyledMemberTeam>
    );
};

const StyledMemberTeam = styled.div`
  
`

const WrapperPhoto = styled.div`
  
`

const Photo = styled.img`
  
`

const Name = styled.span`
  
`

const Profession = styled.span`

`

