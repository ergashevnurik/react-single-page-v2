import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarSection = styled.nav `
    width: 100%;

`

export const NavbarContainer = styled.div `
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    padding: 20px;
`

export const NavbarLogo = styled(Link) `
    text-decoration: none;
    color: white;
    font-size: 24px;

    padding: 12px 20px;
`

export const NavbarUnOrderedList = styled.ul `
    display: flex;
    flex-wrap: wrap;
    margin-left: auto;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        margin: auto!important;
    }

    list-style: none
`

export const NavbarListItem = styled.li `
    padding: 10px;

`

export const NavbarLink = styled(Link) `
    text-decoration: none;
    color: white;

    padding: 12px 20px;
`