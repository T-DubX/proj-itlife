import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";
import cursorPointer from "../../../assets/images/cursor.svg"

export const Social = () => {
    return (
        <StyledSocial>
            <WrapperIcon>
                <Icon iconId={'twitter'} width={'20'} height={'18'} viewBox={'0 0 20 18'}/>
            </WrapperIcon>
            <WrapperIcon>
                <Icon iconId={'facebook'} width={'11'} height={'20'} viewBox={'0 0 11 20'}/>
            </WrapperIcon>
            <WrapperIcon>
                <Icon iconId={'instagram'} width={'21'} height={'20'} viewBox={'0 0 21 20'}/>
            </WrapperIcon>
            <WrapperIcon>
                <Icon iconId={'linkedin'} width={'20'} height={'20'} viewBox={'0 0 20 20'}/>
            </WrapperIcon>
            <WrapperIcon>
                <Icon iconId={'telegram'} width={'19'} height={'16'} viewBox={'0 0 20 14'}/>
            </WrapperIcon>
        </StyledSocial>
    );
};

const StyledSocial = styled.div`
  display: flex;
  gap: 10px;
`

const WrapperIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;

  border: 1px solid ${theme.colors.hover};
  
  svg {
    fill: #18B5DC;
  }
  
  &:hover {
    cursor: url(${cursorPointer}), pointer;
    background-color: ${theme.colors.hover};
    
    svg {
      cursor: url(${cursorPointer}), pointer;
      fill: #FFF;
    }
    
    svg use{
      cursor: url(${cursorPointer}), pointer;
    }
  }
`
