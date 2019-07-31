// import modules
import React from 'react';
import styled from 'styled-components';

// import types
import { TABLET } from '../types';

const ProfileBox = styled.section`
    padding: 5% 10%;
    background-color: white;
    color: black;
`;

const ProfileInfo = styled.div`
    display: flex;
    align-items: center;

    p {
        color: black;
        margin: auto;
    }

    img {
        flex: 0 0 120px;
        width: 120px;
        border-radius: 60px;
        margin: 0 30px 30px 0 ;
        background-size: contain;
    }
  
    ${TABLET} {
        flex-direction: column;
    }
`;

export const Profile = (): JSX.Element => {
    return (
        <ProfileBox>
            <ProfileInfo>
                <img src="./assets/profile.jpeg" alt="프로필" />
                <p>
                    안녕하세요.<strong>임경민</strong>입니다 :) 나이 26살 🐕 / 국적 🇰🇷<br /><br />

                    🌟* <br />
                    * <br />

                </p>
            </ProfileInfo>
        </ProfileBox>
    )
};
