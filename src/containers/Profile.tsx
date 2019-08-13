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
        margin: 10px 0 0 20px;
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

const Google = styled.p`
    background: #fff;
    color: #000000;
    padding: 2px 4px;
    border-radius: 3px;
    display: inline-block;
    border: 1px solid black;

    img{
        width: 18px; 
        height: 18px;
    }

    a {
        text-decoration: none;
        color:#000000;
        :hover {
            text-decoration: underline;
        }
    }
`;

const Youtube = styled.p`
    background: #ff0000;
    color: #fff;
    padding: 2px 4px;
    border-radius: 3px;
    display: inline-block;

    img{
        width: 18px; 
        height: 18px;
    }

    a {
        text-decoration: none;
        color:#fff;
        :hover {
            text-decoration: underline;
        }
    }
`;

const Wix = styled.p`
    background: #fff;
    color: #000000;
    padding: 2px 4px;
    border-radius: 3px;
    display: inline-block;
    border: 1px solid black;

    img{
        width: 18px; 
        height: 18px;
    }

    a {
        text-decoration: none;
        color:#000000;
        :hover {
            text-decoration: underline;
        }
    }
`;

/* eslint-disable */
export const Profile = (): JSX.Element => {
    return (
        <ProfileBox>
            <ProfileInfo>
                <ProfileImage>
                    <img src="./assets/profile.jpeg" alt='프로필' /><br />
                    <span>
                        <span role='img' aria-label='developer'>👨🏻‍💻</span>
                        <strong>임경민</strong> 26살
                    </span>
                </ProfileImage>
                <p>
                    <p><span role='img' aria-label='macbook'>💻</span> Javascript, Typescript 주 언어로 개발하고 있습니다.</p> <br />

                    <Youtube>
                        <img src='/assets/profile/youtube.png' alt='youtube' />
                        <a href='https://bit.ly/2OBEBzT' target='_blank'>Youtube</a>
                    </Youtube>  Youtube 링크<br />

                    <Google>
                        <img src='/assets/profile/google-drive.png' alt='google drive' />
                        <a href='https://bit.ly/2yw0SEd' target='_blank'>Google Drive</a>
                    </Google>  Youtube 컨텐츠를 기획자료입니다.(수정중)<br />

                    <Wix>
                        <img src='/assets/profile/wix.png' alt='wix' />
                        <a href='https://bit.ly/2GC9CNG' target='_blank'>Wix</a>
                    </Wix>  대학교 시절 포트폴리오입니다.<br />
                </p>
            </ProfileInfo>
        </ProfileBox>
    )
};
