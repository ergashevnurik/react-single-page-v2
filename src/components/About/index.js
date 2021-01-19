import React from 'react';
import {
    AboutSection,
    AboutContainer,
    AboutRow,
    AboutColumnLeft,
    AboutImage,
    AboutSpan,
    AboutColumnRight,
    AboutHead
} from './AboutElements'

const About = ({reverse, img, alt, h1}) => {
    return (
        <AboutSection>
            <AboutContainer>
                <AboutHead>About</AboutHead>
                <AboutRow>
                    <AboutColumnLeft reverse={reverse}>
                        <AboutImage src={img} alt={alt}></AboutImage>
                    </AboutColumnLeft>
                    <AboutColumnRight reverse={reverse}>
                        <AboutSpan>{h1}</AboutSpan>
                    </AboutColumnRight>
                </AboutRow>
            </AboutContainer>
        </AboutSection>
    )
}

export default About
