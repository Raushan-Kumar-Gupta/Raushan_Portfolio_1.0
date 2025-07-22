import React from "react";
import styled from "styled-components";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

const FooterContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: #9573dd;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    clip-path: polygon(
        0% 15%,
        13% 13%,
        35% 26%,
        56% 10%,
        84% 0,
        100% 0,
        100% 85%,
        100% 100%,
        85% 100%,
        15% 100%,
        0 100%,
        0% 85%
    );

    @media (max-width: 768px) {
        padding-top: 6em;
    }
    @media (max-width: 500px) {
        padding-top: 6em;
    }
`;

const Title = styled.h1`
    margin-top: 2em;
    font-size: 2rem;
    color: #1b1b1b;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: "Alfa Slab One", cursive;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
    @media (max-width: 500px) {
        font-size: 1rem;
    }
`;

const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const BottomText = styled.p`
    font-size: 0.8rem;
    color: #252525;
    font-weight: 500;
    letter-spacing: 2px;

    @media (max-width: 768px) {
        font-size: 0.55rem;
        color: #1b1b1b;
    }
    @media (max-width: 500px) {
        font-size: 0.55rem;
        color: #1b1b1b;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Title>Raushan Kumar Gupta</Title>
            <SocialMediaContainer>
                <a
                    href="https://github.com/Raushan-Kumar-Gupta"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Github />
                </a>
                <a
                    href="https://www.instagram.com/raushan.kalwar_/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Instagram />
                </a>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Facebook />
                </a>
                <a
                    href="https://www.linkedin.com/in/raushan-kumar-gupta-327349258/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Linkedin />
                </a>

                <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Twitter />
                </a>
            </SocialMediaContainer>
            <BottomText>© 2024 Raushan Kumar Gupta❤️ . All rights reserved.</BottomText>
        </FooterContainer>
    );
};

export default Footer;
