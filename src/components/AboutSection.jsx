import React, { useState, useRef, useEffect, useMemo } from "react";
import "../styles/aboutSection.scss";
import { Bounce, Slide } from "react-awesome-reveal";
import "animate.css";
import { skills, certifications, education } from "../data/constants";
import { CalendarDays, Sparkles } from "lucide-react";

import styled from "styled-components";

const SkillContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
`;

const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    border: 3px solid #9573dd;
    /* box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px; */
    border-radius: 16px;
    padding: 18px 36px;
    @media (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }
    @media (max-width: 500px) {
        max-width: 330px;
        padding: 10px 36px;
    }
`;

const SkillTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
`;

const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;

const SkillItem = styled.div`
    font-size: 16px;
    font-weight: 400;
    border: 1px solid #616161;
    border-radius: 12px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        padding: 6px 12px;
    }
`;

const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;

const CertificationContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    /* flex-wrap: wrap; */
`;

const ContentContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const InsideCertification = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #9573dd;
`;

const IssueDate = styled.h3`
    font-size: 10px;
    font-weight: bold;
    color: #131313;
    background: #9573dd;
    width: 13em;
    height: 2.5em;
    border-radius: 8px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const CertificateTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #1d1d1d;
`;

const CertificateDesc = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: #292929;
`;

const CertificateLink = styled.a`
    font-size: 12px;
    font-weight: bold;
    color: #292929;
    text-decoration: none;
    text-align: right;
    &:hover {
        text-decoration: none;
        color: #f5b640;
    }
`;

// const ImageBox = styled.div`
//     width: 28px;
//     height: 28px;
//     border-radius: 50%;
//     background-color: ${(props) => props.color};
// `;

const EducationSection = styled.div`
    width: auto;
    height: auto;
`;

const EducationTitle = styled.h1`
    font-size: 48px;
    font-weight: 600;
    color: #1d1d1d;
    text-align: center;
    margin-top: 5px;
`;

const EducationContainer = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

const EducationCard = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #9573dd;
`;

const EducationContent = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const EducationDesc = styled.p`
    font-size: 13px;
    text-align: justify;
`;

const EducationDegree = styled.p`
    font-size: 12px;
    font-weight: bold;
    color: #2c2c2c;
    text-decoration: none;
    text-align: left;
    margin-bottom: 5px;
`;

const SchoolName = styled.h2`
    font-size: 20px;
    font-weight: 600;
    color: #1d1d1d;
`;

const AcademicDate = styled.h3`
    font-size: 10px;
    font-weight: bold;
    color: #131313;
    background: #9573dd;
    width: 15em;
    height: 2.5em;
    border-radius: 8px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const GradeCapsule = styled.div`
    margin-top: 10px;
    font-size: 12px;
    font-weight: bold;
    color: #131313;
    background: #9573dd;
    width: 13em;
    height: 2.75em;
    border-radius: 8px;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;

const AboutSection = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
    const timerIdRef = useRef(null);

    const programmingLanguages = useMemo(
        () => ["JavaScript", "HTML5", "SCSS", "CSS3", "ReactJs", "Node.js"],
        []
    );

    const languageColors = {
        JavaScript: "#edda42",
        HTML5: "#e34c26",
        SCSS: "#ed53a0",
        CSS3: "#1572b6",
        ReactJs: "#219dbf",
        "Node.js": "#48ab3f",
    };

    const currentLanguage = useMemo(
        () => programmingLanguages[currentLanguageIndex],
        [currentLanguageIndex, programmingLanguages]
    );

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    useEffect(() => {
        if (isHovering) {
            // Set a timeout to update the currentLanguageIndex every 1.2 seconds
            const interval = 1200;
            timerIdRef.current = setInterval(() => {
                setCurrentLanguageIndex(
                    (prevIndex) => (prevIndex + 1) % programmingLanguages.length
                );
            }, interval);
        } else {
            clearInterval(timerIdRef.current);
            setCurrentLanguageIndex(0);
        }

        return () => {
            clearInterval(timerIdRef.current);
        };
    }, [isHovering, programmingLanguages]);

    return (
        <div className="about_container" id="about">
            <Bounce>
                <h1 className="header">
                    Bringing ideas to life through <br />
                    <span
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            color: isHovering
                                ? languageColors[currentLanguage]
                                : "#161616",
                            fontSize: isHovering ? "2.5rem" : "3rem",
                            transition: "all 0.5s ease",
                        }}
                        className="inside_header">
                        {isHovering ? currentLanguage : "code"}
                    </span>{" "}
                    and design
                </h1>
            </Bounce>

            <div className="my_info_container">
                {/* <h1 className="text-5xl font-bold text-gray-900 text-center mt-4">
                    Skills
                </h1> */}
                <SkillContainer>
                    {skills.map((skill, skillIdx) => (
                        <Skill key={skill.title || skillIdx}>
                            <SkillTitle className="text-gray-900">
                                {skill.title}
                            </SkillTitle>
                            <SkillList>
                                {skill.skills.map((item, itemIdx) => (
                                    <SkillItem key={item.name || itemIdx}>
                                        <SkillImage src={item.image} />
                                        {item.name}
                                    </SkillItem>
                                ))}
                            </SkillList>
                        </Skill>
                    ))}
                </SkillContainer>
            </div>

            {/* certification section starts here  */}

            <h1 className="text-5xl font-bold text-gray-900 text-center mt-10">
                Certifications
            </h1>
            <CertificationContainer>
                <div className="certification_container">
                    {certifications.map((certification, certIdx) => (
                        <div className="certification_list" key={certification.title || certIdx}>
                            <Bounce>
                                <InsideCertification>
                                    {/* <ImageBox color={certification.color} /> */}
                                    <ContentContainer>
                                        <IssueDate>
                                            <CalendarDays size={18} />
                                            {certification.issueDate}
                                        </IssueDate>
                                        <CertificateTitle>
                                            {certification.title}
                                        </CertificateTitle>
                                        <CertificateDesc>
                                            {certification.desc}
                                        </CertificateDesc>
                                        <CertificateLink
                                            href={certification.link}
                                            target="_blank">
                                            {certification.issuer}
                                        </CertificateLink>
                                    </ContentContainer>
                                </InsideCertification>
                            </Bounce>
                        </div>
                    ))}
                </div>
            </CertificationContainer>

            {/* education section comes here */}

           <EducationSection
                id="education"
                className="education_container">
                <EducationTitle className="educationTitle">
                    Education
                </EducationTitle>
                <EducationContainer>
                    <div className="education_list">
                        {education.map((education, idx) => (
                            <div className="education" key={education.id || idx}>
                                <Slide direction="right" delay={3}>
                                    <EducationCard>
                                        {/* <ImageBox color={education.color} /> */}
                                        <EducationContent>
                                            <AcademicDate>
                                                <CalendarDays size={18} />
                                                {education.date}
                                            </AcademicDate>
                                            <SchoolName>
                                                {education.school}
                                            </SchoolName>
                                            <EducationDegree
                                                href={education.degree}>
                                                {education.degree}
                                            </EducationDegree>
                                            <EducationDesc>
                                                {education.desc}
                                            </EducationDesc>
                                            <GradeCapsule>
                                                <Sparkles size={16} />
                                                {education.grade}
                                            </GradeCapsule>
                                        </EducationContent>
                                    </EducationCard>
                                </Slide>
                            </div>
                        ))}
                    </div>
                </EducationContainer>
            </EducationSection >
        </div>
    );
};

export default AboutSection;
