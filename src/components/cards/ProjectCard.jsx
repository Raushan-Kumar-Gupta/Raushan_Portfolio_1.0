import { Github, Link } from "lucide-react";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    /* background-color: #fcfcfc; */
    width: 500px;
    border: 2px solid #9573dd;
    border-radius: 8px;
    overflow: hidden;
    margin: 16px;
    padding: 16px;
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-4px);
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    /* border: 1px solid #9573dd; */
    border-radius: 12px;
`;

const DetailsContainer = styled.div`
    margin-top: 16px;
`;

const Title = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 8px;
    font-weight: bold;
    color: #1f1f1f;
`;

const Date = styled.p`
    color: #3f3f3f;
    margin-bottom: 8px;
`;

const Description = styled.p`
    margin-bottom: 16px;
    text-align: justify;
`;

const TagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Tag = styled.span`
    font-size: 0.8rem;
    background-color: #9573dd;
    padding: 4px 8px;
    border-radius: 4px;
`;

const Category = styled.p`
    font-weight: bold;
    color: #333;
    margin-top: 16px;
    text-transform: capitalize;
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 16px;

    a {
        text-decoration: none;
        color: #2c2c2c;
        background-color: #8f6bdd;
        padding: 8px 16px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: bold;
    }

    p {
        font-weight: light;
        color: #fafafa;
        background-color: #2c2c2c;
        padding: 8px 16px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
    }
`;

const ProjectCard = ({ project }) => {
    const {
        id,
        title,
        date,
        description,
        image,
        tags,
        category,
        github,
        webapp,
    } = project;

    return (
        <CardContainer>
            <Image src={image} alt={title} />
            <DetailsContainer>
                <Title>{title}</Title>
                <Date>{date}</Date>
                <Description>{description}</Description>
                <TagsContainer>
                    {tags.map((tag, index) => (
                        <Tag key={index}>{tag}</Tag>
                    ))}
                </TagsContainer>
                <Category>{category}</Category>
                <LinksContainer>
                    {github ? (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer">
                            GitHub <Github size={18} />
                        </a>
                    ) : (
                        <p>NA</p>
                    )}
                    {webapp ? (
                        <a
                            href={webapp}
                            target="_blank"
                            rel="noopener noreferrer">
                            Link <Link size={18} />
                        </a>
                    ) : (
                        <p>Not Hosted</p>
                    )}
                </LinksContainer>
            </DetailsContainer>
        </CardContainer>
    );
};

export default ProjectCard;
