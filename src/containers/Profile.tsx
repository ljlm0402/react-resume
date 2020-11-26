// import modules
import React from "react";
import styled from "styled-components";

// import types
import { TABLET } from "../types";

const JavaScript = styled.strong`
  font-size: 15px;
  color: #efdb4e;
`;

const TypeScript = styled.strong`
  font-size: 15px;
  color: #2876c3;
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
    color: #000000;
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
    color: #fff;
    :hover {
      text-decoration: underline;
    }
  }
`;

const Resume = styled.p`
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
    color: #000000;
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
        <ul>
          <li>
            <JavaScript>JavaScript</JavaScript>,{" "}
            <TypeScript>TypeScript</TypeScript> 주 언어로 사용하고있습니다.
          </li>
          <li>
            저의 개발 지향점은 <strong>Best practices</strong>를 통한{" "}
            <strong>Best performance </strong> 이끌어내는 것입니다.
          </li>
          <li>
            관심 분야로는 Architecture, Clean Code, Design Pattern 이며, 공부를
            진행하고 있습니다.
          </li>
          <li>
            자신만의 서비스를 구축해보는걸 목표로 다양한 개인 프로젝트를 만들어
            보았습니다.
          </li>
        </ul>
      </ProfileInfo>
      <div>
        <Github>
          <img src="/assets/skill/devops/github.png" alt="github" />
          <a href="https://github.com/ljlm0402" target="_blank">
            {" "}
            깃 저장소
          </a>
        </Github>
        &nbsp;&nbsp;&nbsp;
        <Resume>
          <img src="/assets/skill/application/gridsome.png" alt="gridsome" />
          <a href="http://kyungmin-resume.surge.sh/" target="_blank">
            {" "}
            포트폴리오
          </a>
        </Resume>
        &nbsp;&nbsp;&nbsp;
        <Netlify>
          <img src="/assets/skill/utilities/netlify.png" alt="netlify" />
          <a href="https://ljlm0402.netlify.com/" target="_blank">
            {" "}
            기술 블로그
          </a>
        </Netlify>
      </div>
    </ProfileBox>
  );
};
