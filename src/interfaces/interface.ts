export interface Skill {
    name: string;
    url: string;
};

export interface IExpList {
    name: string;
    subtitle: string;
    icon?: string;
    project: Array<Project>;
};

export interface Project {
    title: string;
    date: string;
    subtitle: string;
    link?: Array<Link>;
    youtube?: string;
    stack: Array<string>;
    mywork: Array<Mywork>;
};

export interface IProject {
    project: Project;
};

export interface Link {
    title: string;
    content: string;
};

export interface ILink {
    link: Link;
};

export interface Mywork {
    title: string;
    content: string;
};

export interface IWork {
    work: Mywork;
};
