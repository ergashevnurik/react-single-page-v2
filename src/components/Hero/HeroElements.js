import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const HeroSection = styled.section `
    width: 100%;

`

export const HeroContainer = styled.div `
    width: 1200px;
    margin: auto;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const HeroRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const HeroColumn = styled.div `
    width: 900px;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    text-align: center;

    padding: 20px;
`

export const HeroSpan = styled.p `
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 5px;
`

export const HeroH1 = styled.h1 `
    font-size: clamp(2.5rem, 100vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 10px;
`

export const HeroP = styled.p `
    font-size: clamp(0.8rem, 100vw, 1.2rem);
    margin-bottom: 20px;
`

export const HeroButton = styled(Link) `
    color: white;
    padding: 12px 20px;
    border: 2px solid white;

    text-decoration: none;
    transition: all 0.6s;

    &:hover {
        background: #fff;
        color: black;
    }

`

export const HeroImage = styled.img `
    width: 100%;
    height: 100%;
`