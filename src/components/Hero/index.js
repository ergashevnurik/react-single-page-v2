import React from 'react'
import {
    HeroSection,
    HeroContainer,
    HeroRow,
    HeroColumn,
    HeroSpan,
    HeroH1,
    HeroP,
    HeroButton,
} from './HeroElements'

const Hero = ({span, h1, p, link, buttonLabel}) => {
    return (
        <HeroSection>
            <HeroContainer>
                <HeroRow>
                    <HeroColumn>
                        <HeroSpan>{span}</HeroSpan>
                        <HeroH1>{h1}</HeroH1>
                        <HeroP>{p}</HeroP>
                        <HeroButton to={link}>{buttonLabel}</HeroButton>
                    </HeroColumn>
                </HeroRow>
            </HeroContainer>
        </HeroSection>
    )
}

export default Hero
