// import modules
import React from 'react';

// import interface
import { IWork } from '../interfaces/interface';

/* eslint-disable */
export const Mywork = (props: IWork): JSX.Element => {
    const { work } = props;

    return (
        <li>{work.title} : {work.content}</li>
    );
};
