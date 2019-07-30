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
                    안녕하세요.<strong>임경민</strong>입니다.<br /><br />

                    * 타입스크립트, 자바스크립트를 주로 사용하는 백엔드 개발자입니다. <br />
                    * Serverless, Cloud Computing에 관심을 갖고 공부를 하고있으며 각종 스터디와 컨퍼런스를 참여하며 기술 역량을 키우고 있습니다.<br />
                </p>
            </ProfileInfo>
        </ProfileBox>
    )
};
