// import modules
import React from 'react';
import styled from 'styled-components';

// import types
import { TABLET } from '../types';

// import components
import { Project } from './index';

// import interface
import { IExpList, IStudyList } from '../interfaces/interface';

const ExpBox = styled.div`
    padding: 5%;
    border: 1px solid lightgray;
    margin: 5vh 0;

    p {
        color: black;
        margin-bottom: 10px;
    }
`;

const ProjectList = styled.ul`
    list-style: none;
    
    ${TABLET} {
        list-style: none;
        padding: unset;
    }
`;

const Icon = styled.img`
    max-width: 70px;
    background-size: contain;    
`;

export const Exp = (props: { career: IExpList }): JSX.Element => {
    const { career } = props;

    return (
        <ExpBox>
            {career.icon ? <Icon src={career.icon} alt={career.name} /> : null}
            <h3>{career.name}</h3>
            <p>{career.subtitle}</p>
            <h4>주요 업무 내용</h4>
            <ProjectList>
                {career.project.map((item: any) => {
                    return <Project key={item.title} project={item} />
                })}
            </ProjectList>
        </ExpBox>
    )
};

export const Study = (props: { study: IStudyList }): JSX.Element => {
    const { study } = props;

    return (
        <ExpBox>
            {study.icon ? <Icon src={study.icon} alt={study.name} /> : null}
            <h3>{study.name}</h3>
            <p>{study.subtitle}</p>
            <h4>주요 업무 내용</h4>
            <ProjectList>
                {study.studys.map((item: any) => {
                    return <Project key={item.title} project={item} />
                })}
            </ProjectList>
        </ExpBox>
    )
};
