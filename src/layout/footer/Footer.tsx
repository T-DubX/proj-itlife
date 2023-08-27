import React from 'react';
import styled from "styled-components";
import { Logo } from '../../components/logo/Logo';
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {Social} from "./social/Social";

const items = ['Home', 'services', 'About', 'contacts'];
export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Logo/>
                <Menu menuItem={items}/>
                <Social/>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  
`
