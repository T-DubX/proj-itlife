import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import cursorPointer from "../../assets/images/cursor.svg"

export const Logo = () => {
    return (
        <WrapperLogo>
            <StyledLogo href={'/'}>
                <Icon iconId={'logo'} width={'62'} height={'60'} viewBox={'0 0 62 60'}/>
                <span>ITLife</span>
            </StyledLogo>
        </WrapperLogo>

    );
};

const WrapperLogo = styled.div`
  cursor: url(${cursorPointer}), pointer;
 
`

const StyledLogo = styled.a`
  cursor: url(${cursorPointer}), pointer;
  font-family: 'Train One', cursive;

  display: flex;
  align-items: center;
  gap: 5px;
  
  z-index: 1;
  
  span{
    font-size: 30px;
    font-weight: 400;
    text-transform: uppercase;
    color: #282528;
    cursor: url(${cursorPointer}), pointer;
  }
  
  svg {
    transform: rotate(-15deg);
    cursor: url(${cursorPointer}), pointer;
  }
  
  svg use{
    cursor: url(${cursorPointer}), pointer;
    
  }
`


