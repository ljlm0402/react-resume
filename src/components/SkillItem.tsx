// import modules
import React from "react";
import styled from "styled-components";

// import types
import { TABLET, MOBILE } from "../types";

const SkillItemBox = styled.div`
  flex: 0 0 150px;
  margin-bottom: 24px;

  &:not(:last-child) {
    margin-right: 24px;
  }

  ${TABLET} {
    flex: 0 0 calc(50% - 6px * 2);

    &:nth-child(odd) {
      margin-right: ${MOBILE};
    }

    &:nth-child(even) {
      margin-left: ${MOBILE};
      margin-right: 0;
    }
  }

  ${MOBILE} {
    && {
      flex: 0 0 100%;
      margin-right: 0;
      margin-left: 0;
    }
  }

  span {
    display: block;
    text-align: center;
    margin-top: 5px;
    font-size: 1rem;
    color: white;
  }
`;

const Item = styled.div`
  height: 120px;
  border-radius: 5px;
  border: solid 1px #eaeaea;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
    height: 80px;
    object-fit: contain;
    transform-origin: 50% 55%;
    transition: transform 0.5s ease;

    :hover {
      transform: scale(1.25);
    }
  }
`;

export const SkillItem = (props: { name: string; url: string }) => {
  return (
    <SkillItemBox>
      <Item>
        <img src={props.url} alt={props.name} />
      </Item>
      <span>{props.name}</span>
    </SkillItemBox>
  );
};
