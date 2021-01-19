import React from 'react'
import { TeamData } from '../../Data/TeamData'
import {
    TeamSection,
    TeamContainer,
    TeamRow,
    TeamColumn,
    TeamCard,
    TeamHead,
    TeamPhoto,
    TeamBody,
    TeamH1,
    TeamHeader,
    TeamColumnRight,
    TeamColumnLeft,
    TeamH2
} from './TeamElements'

const Team = () => {
    return (
        <TeamSection>
            <TeamContainer>
                <TeamHeader>Our Team</TeamHeader>
                <TeamRow>
                    <TeamColumnLeft>
                        <TeamH2>Production of MENZ\'s Web site the new and modern Release</TeamH2>
                    </TeamColumnLeft>
                    <TeamColumnRight>
                    {TeamData.map((team, index) => (
                        <TeamColumn key={index}>
                            <TeamCard>
                                <TeamHead>
                                    <TeamPhoto src={team.img} alt={team.alt}></TeamPhoto>
                                </TeamHead>
                                <TeamBody>
                                    <TeamH1>
                                        {team.h1}
                                    </TeamH1>
                                </TeamBody>
                            </TeamCard>
                        </TeamColumn>
                    ))}
                    </TeamColumnRight>
                </TeamRow>
            </TeamContainer>
        </TeamSection>
    )
}

export default Team
