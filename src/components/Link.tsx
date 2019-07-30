// import modules
import React from 'react';

// import interfaces
import { ILink } from '../interfaces/interface';

/* eslint-disable */
export const Link = (props: ILink): JSX.Element => {
    const { link } = props;

    return (
        <li><a href={link.content} target="_blank">{link.title}</a></li>
    );
};
