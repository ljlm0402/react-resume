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
        margin: 10px 10px 0 20px;
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

const Github = styled.p`
    background: #fff;
    padding: 5px 10px;
    border-radius: 3px;
    display: inline-block;
    border: 1px solid black;

    img {
        width: 30px; 
        height: 30px;
        vertical-align: middle;
    }

    a {
        font-weight: bold;
        text-decoration: none;
        color:#000000;
        :hover {
            text-decoration: underline;
        }
    }
`;

const Netlify = styled.p`
    background: #273333;
    padding: 5px 10px;
    border-radius: 3px;
    display: inline-block;
    border: 1px solid black;

    img {
        width: 30px; 
        height: 30px;
        vertical-align: middle;
    }

    a {
        font-weight: bold;
        text-decoration: none;
        color:#fff;
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
                    <ul>
                        <li>깃허브:
                            <Github>
                                <img src='/assets/skill/devops/github.png' alt='github' />
                                <a href='https://github.com/ljlm0402' target='_blank'> GitHub</a>
                            </Github>
                        </li>
                        <li>블로그:
                            <Netlify>
                                <img src='/assets/skill/utilities/netlify.png' alt='netlify' />
                                <a href='https://ljlm0402.netlify.com/' target='_blank'> Netlify</a>
                            </Netlify>
                        </li>
                    </ul>
            </ProfileInfo>
        </ProfileBox>
    )
};
