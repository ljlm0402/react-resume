// import modules
import React from 'react';
import styled from 'styled-components';

// import components 
import { Exp } from '../components';

// import interfaces
import { IExpList } from '../interfaces/interface';

const ExpContainer = styled.section`
    padding: 5% 10%;
    margin-top: 30px;
    border: 1px solid black;
    background-color: white;
    color: black;
`;

const ExpList: Array<IExpList> = [
    {
        name: '(주) 열두달',
        subtitle: '단체음식을 배달 플랫폼 서비스를 하는 회사로써 메인 홈페이지, 관리자 페이지, 등등 인프라 서비스를 구축하였습니다.',
        icon: '/assets/work/fooding.png',
        project: [
            {
                title: 'Fooding 메인 홈페이지',
                date: '2018.10 ~ ',
                subtitle: 'Fooding의 서비스를 이용할 수 있는 메인 홈페이지',
                link: [
                    { title: "푸딩 홈페이지", content: "https://www.fooding.io" }
                ],
                youtube: 'https://www.youtube.com/embed/jQ1YNnLlUKs',
                stack: ['Angular', 'Scss', 'Rxjs', 'Typescript', 'Node.js', 'Javascript', 'Aws'],
                mywork: [
                    { title: "RESTful API", content: "Express, knex(SQL Query builder), axios(HTTP client)" },
                    { title: "서버 구축", content: "웹 서버(Nginx), WAS(Node.js, HTTP, HTTPS), ACM" },
                    { title: "데이터베이스", content: "RDS(MySQL)" },
                    { title: "트래픽 로드 밸런싱", content: "ALB, Route53" },
                    { title: "스토리지", content: "S3, Cloudfront" },
                    { title: "컨테이너 오케스트레이션", content: "Docker, EC2, ECR, ECS" },
                    { title: "CI / CD", content: "Github webhook, Codebuild, Codepipeline" }
                ]
            },

            {
                title: 'Fooding 관리자 페이지',
                date: '2018.10 ~ ',
                subtitle: 'Fooding 서비스를 관리하기 위한 관리자 페이지 구축',
                youtube: 'https://www.youtube.com/embed/jeXTYYE-4JU',
                stack: ['Agular', 'Scss', 'Rxjs', 'Typescript', 'Node.js', 'Javascript', 'Aws'],
                mywork: [
                    { title: "RESTful API", content: "Express, knex(SQL Query builder), axios(HTTP client), aws-sdk(S3-upload)" },
                    { title: "서버 구축", content: "웹 서버(Apache), WAS(Node.js, HTTP, HTTPS), ACM" },
                    { title: "데이터베이스", content: "RDS(MySQL)" },
                    { title: "트래픽 로드 밸런싱", content: "ALB, Route53" },
                    { title: "스토리지", content: "S3, Cloudfront" },
                    { title: "컨테이너 오케스트레이션", content: "Docker, EC2, ECR, ECS" },
                    { title: "CI / CD", content: "Github webhook, Codebuild, Codepipeline" }
                ]
            },

            {
                title: 'Fooding 정기배송 앱',
                date: '2018.10 ~ 2019.05',
                subtitle: '배송 서비스를 진행하기 위해 내부 배송기사용 앱을 개발',
                link: [
                    { title: "푸딩 배송기사 앱", content: "https://play.google.com/store/apps/details?id=app.fooding.delivery" }
                ],
                youtube: 'https://www.youtube.com/embed/-IUGiugc8kM',
                stack: ['Ionic', 'Scss', 'Rxjs', 'Typescript', 'Node.js', 'Javascript', 'Aws'],
                mywork: [
                    { title: "RESTful API", content: "Express, knex(SQL Query builder), axios(HTTP client)" },
                    { title: "서버 구축", content: "WAS(Node.js, HTTP, HTTPS), ACM" },
                    { title: "데이터베이스", content: "RDS(MySQL)" },
                    { title: "트래픽 로드 밸런싱", content: "ALB, Route53" },
                    { title: "스토리지", content: "S3, Cloudfront" },
                ]
            },

            {
                title: 'Fooding Push 서버',
                date: '2018.10 ~ 2019.05',
                subtitle: '카카오톡 알림톡 서비스(이지톡)과 연동하여 고객, 공급자한테 알림 서비스 / Jandi hook으로 내부적 알림 제공 및 Email 서비스를 개발',
                youtube: 'https://www.youtube.com/embed/hcjFL6LDWYQ',
                stack: ['Node.js', 'Javascript', 'Aws'],
                mywork: [
                    { title: "SMS", content: "Express, axios(HTTP client)" },
                    { title: "Email", content: "Express, aws-sdk(S3-upload), ejs, html-pdf(html to pdf render), nodemailer" }
                ]
            },

            {
                title: 'Fooding Scheduler 서버',
                date: '2019.04 ~ 2019.05',
                subtitle: '고객의 주문 스텝을 스케줄링을 통해서 변경하는 서비스 개발',
                stack: ['Node.js', 'Javascript', 'Aws'],
                mywork: [
                    { title: "SCHEDULER", content: "Express, axios(HTTP client), node-schedule, moment(time utill)" }
                ]
            }
        ]
    },

    {
        name: '(주) 씨큐프라임',
        subtitle: '외식 프랜차이즈 전문 솔루션 회사에서 무인주문결제기(KIOSK) 단독으로 개발하였습니다.',
        icon: '/assets/work/secuprime.jpg',
        project: [
            {
                title: 'E-MORDER KIOSK 개발',
                date: '2017.12 ~ 2018.10',
                subtitle: '기존 프로그램으로 실행하는 키오스크와 달리 Web 서비스로 되는 키오스크를 개발하였습니다.',
                link: [
                    { title: "씨큐프라임 홈페이지", content: "http://www.smartfranchise.co.kr/front/kiosk.php" },
                    { title: "KIOSK 구성도", content: "https://ljlm0402.wixsite.com/kiosk/" }
                ],
                youtube: 'https://www.youtube.com/embed/64V7ATPeeyM',
                stack: ['Node.js', 'Javascript'],
                mywork: [
                    { title: "RESTful API", content: "Express, MariaDB, Socket.io, Serialport" },
                    { title: "View", content: "HTML, Css, Javascipt" }
                ]
            }
        ]
    }
];

export const Exps = (): JSX.Element => {
    return (
        <ExpContainer>
            <h2>Work</h2>
            {ExpList.map(item => {
                return <Exp career={item} key={item.name} />
            })}
        </ExpContainer>
    )
};
