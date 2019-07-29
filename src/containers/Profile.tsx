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
        margin: 0 20px 20px 0 ;
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
                <img src="./assets/profile.jpeg" alt="본인 사진입니다." />
                <p>
                    안녕하세요. 백엔드 개발자 임경민입니다. <br />
                    1994. 08. 30 (만 25세) 입니다. <br />

                    * 학력 : 동양미래대학교 학사학위 취득 (2013. 02 ~ 2018. 03) <br />

                    * 자격증 : 정보처리기사 준비 (2019. 08 필기시험 예정) <br />
                </p>
            </ProfileInfo>
        </ProfileBox>
    )
};
