// import modules
import React from 'react';
import styled from 'styled-components';

// import types
import { TABLET } from '../types';

// import containers
import { Profile, Skills, Exps } from './index';

const MainContainer = styled.main`
    display: flex;
    align-item: center;
    justify-content: center;
    flex-direction: column;
    width: 1024px;
    margin: 0 auto;
    ${TABLET} {
        width: 90%;
    }
`;

export const Main = (): JSX.Element => {
    return (
        <>
            <MainContainer>
                <Profile />
                <Skills />
                <Exps />
            </MainContainer>
        </>
    )
};
