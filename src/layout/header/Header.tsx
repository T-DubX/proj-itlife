import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import { Menu } from './menu/Menu';
import {Container} from "../../components/Container";

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
  
`

const Button = styled.button`
  
`

