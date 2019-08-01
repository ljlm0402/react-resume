// import modules
import React from 'react';
import styled from 'styled-components';

// import types
import { TABLET } from '../types';

const ProfileImage = styled.div`
    text-align: center;
`;

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
        background-size: contain;
    }
  
    ${TABLET} {
        flex-direction: column;
    }
`;

const ProfileLink = styled.a`
    text-decoration: none;
    color: #0100FF;
    :hover {
        text-decoration: underline;
    }
`;

export const Profile = (): JSX.Element => {
    return (
        <ProfileBox>
            <ProfileInfo>
                <ProfileImage>
                    <img src="./assets/profile.jpeg" alt="프로필" /><br />
                    <span>
                        <span role="img" aria-label="development">👨🏻‍💻</span>
                        <strong>임경민</strong> 26살
                    </span>
                </ProfileImage>
                <p>
                    <span role="img" aria-label="macbook">💻</span> Javascript, Typescript 주 언어로 개발하고 있습니다. <br />
                    <span role="img" aria-label="youtube">📺</span>Youtube 컨텐츠를 제작을 진행중에 있습니다. <br />
                    <span role="img" aria-label="drive">💾</span><ProfileLink href="https://drive.google.com/open?id=1YSzql9hqYy1oRoozHzaEc2DvFQjebGzW" target="_blank"> 컨텐츠 참고자료</ProfileLink><br />
                    <span role="img" aria-label="mac">🖥</span><ProfileLink href="https://bit.ly/2GC9CNG" target="_blank"> 대학교 포폴</ProfileLink>
                </p>
            </ProfileInfo>
        </ProfileBox>
    )
};
