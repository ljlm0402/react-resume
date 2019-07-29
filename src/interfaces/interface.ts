/**
 * @method Skill
 * @description Skill
 */
export interface Skill {
    name: string;
    url: string;
};

/**
 * @method IExpList
 * @description IExpList
 */
export interface IExpList {
    name: string;
    subtitle: string;
    icon?: string;
    project: Array<Project>;
};

/**
 * @method Project
 * @description Project
 */
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

/**
 * @method Link
 * @description Link
 */
export interface Link {
    title: string;
    content: string;
};

export interface ILink {
    link: Link;
};

/**
 * @method Mywork
 * @description mywork
 */
export interface Mywork {
    title: string;
    content: string;
};

export interface IWork {
    work: Mywork;
};
