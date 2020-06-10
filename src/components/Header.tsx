// import modules
import React from 'react';
import styled from 'styled-components';

// import types
import { MOBILE, TABLET } from '../types';

const HeaderBox = styled.header`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;

    ${TABLET} {
        font-size: 1.2rem;
    }

    ${MOBILE} {
        font-size: 0.7rem;
    }   
`;

export const Header = (): JSX.Element => {
    return (
        <HeaderBox>
            <h1>안녕하세요! 임경민입니다.</h1>
        </HeaderBox>
    )
};
