import React from 'react'
import { NavbarData } from '../../Data/Navbardata'
import {
    NavbarSection,
    NavbarContainer,
    NavbarLogo,
    NavbarUnOrderedList,
    NavbarListItem,
    NavbarLink
} from './NavbarElements'

const Navbar = () => {
    return (
        <NavbarSection>
            <NavbarContainer>
                <NavbarLogo>MENZ</NavbarLogo>
                <NavbarUnOrderedList>
                    {NavbarData.map((navbar, index) => (
                        <NavbarListItem key={index}>
                            <NavbarLink to={navbar.link}>{navbar.title}</NavbarLink>
                        </NavbarListItem>
                    ))}
                </NavbarUnOrderedList>
            </NavbarContainer>
        </NavbarSection>
    )
}

export default Navbar
