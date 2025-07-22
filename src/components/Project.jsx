import React, { useState } from "react";
import { projects } from "../data/constants";
import ProjectCard from "./cards/ProjectCard";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
`;

const ProjectContainer = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    width: 100%;
    height: auto;
    padding: 0 1.5rem;
`;
const ProjectTitle = styled.h1`
    font-size: 48px;
    font-weight: 600;
    color: #1d1d1d;
    text-align: center;
    margin-top: 5px;
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    width: 100%;
    padding: 0 1.5rem;
    justify-content: center;
    align-items: center;
    gap: 10px;

    @media (max-width: 768px) {
        gap: 5px;
    }
    @media (max-width: 500px) {
        gap: 5px;
    }
`;

const ToggleButton = styled.p`
    width: auto;
    height: auto;
    font-size: 1rem;
    font-weight: 600;
    color: #1d1d1d;
    text-align: center;
    margin-top: 5px;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    ${({ $active }) => $active && { background: "#FFCD6D", color: "#0f0f0f" }};
    &:hover {
        background-color: #9573dd;
        color: #fff;
    }

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: left;
    }
    @media (max-width: 500px) {
        font-size: 14px;
        text-align: left;
    }
`;

const Project = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <Wrapper id="project">
            <ProjectTitle>Project</ProjectTitle>
            <ToggleButtonGroup>
                <ToggleButton
                    $active={activeCategory === "all"}
                    value="all"
                    onClick={() => setActiveCategory("all")}>
                    All
                </ToggleButton>
                <div className="divider"></div>
                <ToggleButton
                    $active={activeCategory === "web app"}
                    value="web app"
                    onClick={() => setActiveCategory("web app")}>
                    Web App
                </ToggleButton>
                <div className="divider"></div>
                <ToggleButton
                    $active={activeCategory === "machine learning"}
                    value="machine learning"
                    onClick={() => setActiveCategory("machine learning")}>
                    Machine Learning
                </ToggleButton>
            </ToggleButtonGroup>
            <ProjectContainer>
                {activeCategory === "all" &&
                    projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                {projects
                    .filter((item) => item.category === activeCategory)
                    .map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
            </ProjectContainer>
        </Wrapper>
    );
};

export default Project;
