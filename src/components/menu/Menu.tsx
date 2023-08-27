import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import cursor from "../../assets/images/cursor.svg"

type MenuPropsType = {
    menuItem: Array<string>
}
export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
            <MenuList>
                {
                    props.menuItem.map((item, index) => (
                        <MenuItem key={index}>
                            <Link href={'#'}>
                                {item}
                            </Link>
                        </MenuItem>
                    ))
                }
            </MenuList>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  margin: 28px 0 28px;
`

const MenuList = styled.ul`
  display: flex;
  gap: 30px;
`

const MenuItem = styled.li`
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`

const Link = styled.a`
  &:hover {
    color: ${theme.colors.hover};
    cursor: url(${cursor}), pointer;
  }
`