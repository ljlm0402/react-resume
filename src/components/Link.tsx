// import modules
import React from "react";
import styled from "styled-components";

// import interfaces
import { ILink } from "../interfaces/interface";

const Links = styled.li`
  padding: 0px 5px 6px 0px;
`;

const Href = styled.a`
  text-decoration: none;
  color: #646464;

  :hover {
    text-decoration: underline;
  }
`;

/* eslint-disable */
export const Link = (props: ILink): JSX.Element => {
  const { link } = props;

  return (
    <Links>
      <Href href={link.content} target="_blank">
        {link.title}
      </Href>
    </Links>
  );
};
