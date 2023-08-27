import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {WrapperIcon} from "../../footer/social/Social";
import cursorPoiner from '../../../assets/images/cursor.svg'

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
                <WrapperIcons>
                    <WrapperIcon>
                        <Icon iconId={'twitter'} width={'20'} height={'18'} viewBox={'0 0 20 18'}/>
                    </WrapperIcon>
                    <WrapperIcon>
                        <Icon iconId={'facebook'} width={'11'} height={'20'} viewBox={'0 0 11 21'}/>
                    </WrapperIcon>
                    <WrapperIcon>
                        <Icon iconId={'instagram'} width={'21'} height={'20'} viewBox={'0 0 21 20'}/>
                    </WrapperIcon>
                </WrapperIcons>

            </WrapperPhoto>
            <Name>{props.name}</Name>
            <Profession>{props.profession}</Profession>
        </StyledMemberTeam>
    );
};

const StyledMemberTeam = styled.div`
  display: flex;
  flex-direction: column;

  ${WrapperIcon} {
    background-color: #5DCBE6;
    border: 0;


    svg {
      fill: #FFF;
    }
  }

`

const WrapperIcons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: flex;
  gap: 4px;
  opacity: 0;

  ${WrapperIcon} {
    &:hover {
      cursor: url(${cursorPoiner}), pointer;
      background-color: #FFF;

      svg {
        cursor: url(${cursorPoiner}), pointer;
        fill: #18B5DC;
      }

      svg use {
        cursor: url(${cursorPoiner}), pointer;
      }
    }

    z-index: 1;
  }

}

`

const WrapperPhoto = styled.div`
  margin-bottom: 20px;

  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 270px;
    height: 270px;
    background-color: #18B5DC;

    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
    z-index: -1;
  }

  &:hover {
    
    ${WrapperIcons} {
      opacity: 1;
      cursor: url(${cursorPoiner}), pointer;
    }

    &::before {
      cursor: url(${cursorPoiner}), pointer;
      opacity: 1;
      z-index: 0;
    }

  }

`

const Photo = styled.img`
  &:hover {
    cursor: url(${cursorPoiner}), pointer;
  }
`

const Name = styled.span`
  color: #282528;
  font-size: 18px;
  font-weight: 700;
`

const Profession = styled.span`
  color: #646464;
  font-size: 18px;
  font-weight: 300;
`

