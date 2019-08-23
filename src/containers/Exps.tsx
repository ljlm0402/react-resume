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
        subtitle: '단체음식을 배달 플랫폼 서비스를 하는 회사로써 홈페이지, 관리자 페이지, 등등 인프라 서비스를 구축하였습니다.',
        icon: '/assets/work/fooding.png',
        project: [
            {
                title: 'Fooding 홈페이지',
                subtitle: 'Fooding 메인 서비스 홈페이지',
                link: [
                    { title: '푸딩 홈페이지', content: 'https://www.fooding.io' }
                ],
                youtube: 'https://www.youtube.com/embed/jQ1YNnLlUKs',
                stack: [ 'Angular', 'Scss', 'Rxjs', 'Typescript', 'Node.js', 'Javascript', 'Aws' ],
                mywork: [
                    { title: 'RESTful API', content: 'Express, knex(Query builder), axios(HTTP), jsonwebtoken(certification)' },
                    { title: 'Server Build', content: 'Web server(Nginx), WAS(Node.js, HTTP, HTTPS), ACM' },
                    { title: 'Database', content: 'RDS(MySQL)' },
                    { title: 'Load Balancing', content: 'ALB, Route53' },
                    { title: 'Storage', content: 'S3, CloudFront' },
                    { title: 'Container Orchestration', content: 'Docker, EC2, ECR, ECS' },
                    { title: 'CI / CD', content: 'Github webhook, CodeBuild, CodePipeline' },
                    { title: 'Monitoring', content: 'CloudWatch' }
                ]
            },

            {
                title: 'Fooding 관리자 페이지',
                subtitle: 'Fooding 서비스 관리를 위한 페이지',
                youtube: 'https://www.youtube.com/embed/jeXTYYE-4JU',
                stack: [ 'Angular', 'Scss', 'Rxjs', 'Typescript', 'Node.js', 'Javascript', 'Aws' ],
                mywork: [
                    { title: 'RESTful API', content: 'Express, knex(Query builder), axios(HTTP), aws-sdk(S3-upload)' },
                    { title: 'Server Build', content: 'Web server(Apache), WAS(Node.js, HTTP, HTTPS), ACM' },
                    { title: 'Database', content: 'RDS(MySQL)' },
                    { title: 'Load Balancing', content: 'ALB, Route53' },
                    { title: 'Storage', content: 'S3, Cloudfront' },
                    { title: 'Container Orchestration', content: 'Docker, EC2, ECR, ECS' },
                    { title: 'CI / CD', content: 'Github webhook, CodeBuild, CodePipeline' },
                    { title: 'Monitoring', content: 'CloudWatch' }
                ]
            },

            {
                title: 'Fooding 배송기사 앱',
                subtitle: '배송 서비스를 진행하기 위해 배송기사용 앱',
                link: [
                    { title: '푸딩 배송기사 앱', content: 'https://play.google.com/store/apps/details?id=app.fooding.delivery' }
                ],
                youtube: 'https://www.youtube.com/embed/-IUGiugc8kM',
                stack: [ 'Ionic', 'Scss', 'Rxjs', 'Typescript', 'Node.js', 'Javascript', 'Aws' ],
                mywork: [
                    { title: 'RESTful API', content: 'Express, knex(Query builder), axios(HTTP), jsonwebtoken(certification)' },
                    { title: 'Server Build', content: 'WAS(Node.js, HTTP, HTTPS), ACM' },
                    { title: 'Database', content: 'RDS(MySQL)' },
                    { title: 'Load Balancing', content: 'ALB, Route53' },
                    { title: 'Storage', content: 'S3, CloudFront' }
                ]
            },

            {
                title: 'Fooding Push 서버',
                subtitle: '소비자, 공급자 알림톡 서비스 / JANDI Webhook 사내 알림 / Email 서비스 개발',
                youtube: 'https://www.youtube.com/embed/hcjFL6LDWYQ',
                stack: [ 'Node.js', 'Javascript', 'Aws' ],
                mywork: [
                    { title: 'RESTful API', content: 'Express, axios(HTTP), nodemailer, html-pdf, aws-sdk(S3-upload)' },
                    { title: 'Server Build', content: 'WAS(Node.js, HTTP, HTTPS), ACM' },
                    { title: 'Database', content: 'RDS(MySQL)' },
                    { title: 'Load Balancing', content: 'ALB, Route53' },
                    { title: 'Storage', content: 'S3, CloudFront' },
                    { title: 'Container Orchestration', content: 'Docker, EC2, ECR, ECS' },
                    { title: 'CI / CD', content: 'Github webhook, CodeBuild, CodePipeline' },
                    { title: 'Monitoring', content: 'CloudWatch' }
                ]
            },

            {
                title: 'Fooding Scheduler 서버',
                subtitle: '주문 현황 변경하는 스케줄링 서버 개발',
                stack: [ 'Node.js', 'Javascript', 'Aws' ],
                mywork: [
                    { title: 'RESTful API', content: 'Express, axios(HTTP), node-schedule(schedule), moment(time)' },
                    { title: 'Server Build', content: 'WAS(Node.js, HTTP, HTTPS), ACM' },
                    { title: 'Load balancing', content: 'ALB, Route53' },
                    { title: 'Container Orchestration', content: 'Docker, EC2, ECR, ECS' },
                    { title: 'CI / CD', content: 'Github webhook, CodeBuild, CodePipeline' },
                    { title: 'Monitoring', content: 'CloudWatch' }
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
                title: 'E-MORDER KIOSK',
                subtitle: 'Web 운영되는 키오스크를 개발하였습니다.',
                link: [
                    { title: '씨큐프라임 홈페이지', content: 'http://www.smartfranchise.co.kr/front/kiosk.php' },
                    { title: 'E-MODER KIOSK 구성도', content: 'https://ljlm0402.wixsite.com/kiosk/' }
                ],
                youtube: 'https://www.youtube.com/embed/64V7ATPeeyM',
                stack: [ 'Node.js', 'Javascript' ],
                mywork: [
                    { title: 'RESTful API', content: 'Express, Socket.io(Real time), Serialport(Serial com  )' },
                    { title: 'Server Build', content: 'WAS(Node.js, HTTP)' },
                    { title: 'Database', content: 'MariaDB' },
                    { title: 'Load Balancing', content: 'PM2(Advanced Node.js Process manager)' },
                    { title: 'Front', content: 'EJS(Embedded JavaScript templates)' }
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
