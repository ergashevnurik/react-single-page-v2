import styled from 'styled-components'

export const TeamSection = styled.section `
    width: 100%;
`

export const TeamContainer = styled.div `
    width: 1200px;
    margin: auto;

    margin-bottom: 20px;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const TeamRow = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const TeamColumn = styled.div `
    margin: 5px;
`

export const TeamCard = styled.div `
    width: 200px;
    height: 150px;

    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 2px solid white;
`

export const TeamHead = styled.div `
    width: 100px;
    height: 90px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    
` 

export const TeamPhoto = styled.img `
    width: 100%;
    height: 100%;

    border-radius: 50%;
`

export const TeamBody = styled.div `

`

export const TeamH1 = styled.h1 `
    text-align: center;
    font-size: 18px;
    color: white;
`

export const TeamHeader = styled.h1 `
    font-size: clamp(2.5rem, 100vw, 3.5rem);
    padding: 20px;
`

export const TeamColumnRight = styled.div `
    width: 800px;
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;

    @media screen and (max-width: 1200px) {
        width: 100%;
    }
`

export const TeamH2 = styled.h1 `
    font-size: clamp(2.5rem, 100vw, 3.5rem);
    padding: 20px;
`

export const TeamColumnLeft = styled.div `
    width: 400px;


    @media screen and (max-width: 1200px) {
        width: 100%;
        padding: 20px;
    }
`