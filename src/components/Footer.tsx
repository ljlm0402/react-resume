// import modules
import React from 'react';
import styled from 'styled-components';

// import type
import { MOBILE } from '../types';

const FooterBox = styled.footer`
    height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    background-color: #f0f0f0;
    color: black;
    ${MOBILE} {
        font-size: 0.9rem;
    }   
`;

/* eslint-disable */
export const Footer = (): JSX.Element => {
    return (
        <FooterBox>
            <a className="github" href="https://github.com/ljlm0402" target="_blank"></a>
        </FooterBox>
    )
};
