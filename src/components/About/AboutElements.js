import styled from 'styled-components'

export const AboutSection = styled.section `
    width: 100%;
`

export const AboutContainer = styled.div `
    margin: auto;
    width: 1200px;

    @media screen and (max-width: 1200px) {
        width: 100%;
        padding: 20px;
    }
`

export const AboutRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
`

export const AboutColumnLeft = styled.div `
    width: 550px;

    order: ${({reverse}) => (reverse ? '1' : '2')};

    @media screen and (max-width: 1200px) {
        width: 100%;
    }

    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.4);
    }
`

export const AboutImage = styled.img `
    width: 100%;
    height: 100%;
    
    
`

export const AboutSpan = styled.h1 `
    font-size: clamp(2.5rem, 100vw, 3.5rem);
    padding: 20px;
`


export const AboutColumnRight = styled.div `
    width: 550px;
    order: ${({reverse}) => (reverse ? '2' : '1')};

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const AboutHead = styled.h1 `
    font-size: clamp(2.5rem, 100vw, 3.5rem);
    padding: 20px;
`