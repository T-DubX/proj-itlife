import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import { Menu } from '../../components/menu/Menu';
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

const items = ['Home', 'services', 'About', 'contacts'];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Logo/>
                <Menu menuItem={items}/>
                <Button>callback</Button>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  padding: 3px 0 3px;
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Button = styled.button`
  font-weight: 600;
  font-size: 18px;
  
  border: 1px solid ${theme.colors.font};
  color: ${theme.colors.font};
  text-transform: uppercase;
  
  padding: 10px 20px;
  
  &:hover {
    transition: .2s;
    border: 1px solid ${theme.colors.hover};
    background-color: ${theme.colors.hover};
    color: #FFF;
  }
  
`

