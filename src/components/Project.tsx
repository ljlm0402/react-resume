// import modules
import React from 'react';
import styled from 'styled-components';

// import types
import { TABLET } from '../types';

// import components
import { Link, Mywork } from './index';

// import interfaces
import { IProject } from '../interfaces/interface';


const ProjectItem = styled.li`
    list-style: none;
    margin: 20px 0;
    padding: 20px 0;
    border-bottom: 1px dotted lightgray;

    :nth-child(1) {
        padding: 0 0 20px 0;
    }

    :nth-last-child(1) {
        border-bottom: none;
    }
    ul {
        margin: 20px 0;

        ${TABLET} {
            list-style: none;
            padding: unset;
        }
    }
`;

/* eslint-disable */
export const Project = (props: IProject): JSX.Element => {
    const { project } = props;

    return (
        <ProjectItem>
            {project.title ? <h4> > {project.title}</h4> : null}
            {project.subtitle ? <p>{project.subtitle}</p>: null}
            <ul>
                {project.link ? project.link.map((item: any) => {
                    return <Link key={item.title} link={item} />})
                : null}
            </ul>

            {project.link ? <hr /> : null}

            <ul>
                {project.mywork.map((work: any) => {
                    return <Mywork key={work.title} work={work} />
                })}

                <br />
                {project.youtube ? <iframe src={project.youtube}></iframe> : null}
            </ul>
        </ProjectItem>
    )
};
