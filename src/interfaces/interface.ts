/**
 * @method Skill
 * @description 기술 스택
 */
export interface Skill {
    name: string;
    url: string;
};

/**
 * @method Exp
 * @description 경력 스택
 */
export interface IExpList {
    name: string;
    subtitle: string;
    icon?: string;
    project: Array<Project>;
};
export interface IProject {
    project: Project;
};

/**
 * @method Study
 * @description 스터디 경험
 */
export interface IStudyList {
    name: string;
    subtitle: string;
    icon?: string;
    studys: Array<Project>;
};
export interface IStudy {
    study: Project;
};

/**
 * @method Project
 * @description 프로젝트 정보
 */
export interface Project {
    title: string;
    subtitle: string;
    link?: Array<Link>;
    youtube?: string;
    stack: Array<string>;
    mywork: Array<Mywork>;
};

/**
 * @method Link
 * @description 참고 링크
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
 * @description 역할
 */
export interface Mywork {
    title: string;
    content: string;
};
export interface IWork {
    work: Mywork;
};
