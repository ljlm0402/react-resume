// import modules
import React from 'react';
import styled from 'styled-components';

// import interface
import { SkillItem } from './SkillItem';
import { Skill } from '../interfaces/interface';

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const SkillList = (props: { title: string, list: Array<Skill> }) => {
    const { title, list } = props;
    return (
        <>
            <h3>{title}</h3>
            <List>
                {list.map(item => {
                    return <SkillItem name={item.name} url={item.url} key={item.name} />
                })}
            </List>
        </>
    )
};
