// import modules
import React from 'react';
import styled from 'styled-components';

// import containers
import { Profile } from './Profile';
import { Skills } from './Skills';
import { Exps } from './Exps';
import { TABLET } from '../types';

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
