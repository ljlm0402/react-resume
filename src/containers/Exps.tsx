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
        name: '(주)열두달',
        date: '2018. 10. 01 ~ 재직중',
        subtitle: '단체음식을 배달 플랫폼 서비스를 하는 회사로써 홈페이지, 관리자 페이지, 등등 인프라 서비스를 구축하였습니다.',
        icon: '/assets/work/fooding.png',
        project: [
            {
                title: '푸딩, 홈페이지',
                subtitle: '메인 홈페이지 서비스 구축',
                link: [
                    { title: '푸딩 홈페이지', content: 'https://www.fooding.io' }
                ],
                youtube: 'https://www.youtube.com/embed/jQ1YNnLlUKs',
                mywork: [
                    { title: 'Backend', content: 'Express, JavaScript' },
                    { title: 'Frontend', content: 'Angular, TypeScript, RxJs, Scss, Webpack' },
                    { title: 'Server Build', content: 'Web server(Nginx), WAS(Node Js, HTTP, HTTPS), ACM' },
                    { title: 'Database', content: 'RDS(MySQL)' },
                    { title: 'Load Balancing', content: 'ALB, Route53' },
                    { title: 'Storage', content: 'S3, CloudFront' },
                    { title: 'Container Orchestration', content: 'Docker, EC2, ECR, ECS' },
                    { title: 'CI / CD', content: 'Github webhook, CodeBuild, CodePipeline' },
                    { title: 'Monitoring', content: 'CloudWatch' }
                ]
            },

            {
                title: '푸딩, 관리자',
                subtitle: '푸딩 메인 서비스 관리자 구축',
                youtube: 'https://www.youtube.com/embed/jeXTYYE-4JU',
                mywork: [
                    { title: 'Backend', content: 'Express, JavaScript' },
                    { title: 'Frontend', content: 'Angular, TypeScript, RxJs, Scss, Webpack' },
                    { title: 'Server Build', content: 'Web server(Apache), WAS(Node Js, HTTP, HTTPS), ACM' },
                    { title: 'Database', content: 'RDS(MySQL)' },
                    { title: 'Load Balancing', content: 'ALB, Route53' },
                    { title: 'Storage', content: 'S3, Cloudfront' },
                    { title: 'Container Orchestration', content: 'Docker, EC2, ECR, ECS' },
                    { title: 'CI / CD', content: 'Github webhook, CodeBuild, CodePipeline' },
                    { title: 'Monitoring', content: 'CloudWatch' }
                ]
            },

            {
                title: '푸딩, 배송기사 앱',
                subtitle: '푸딩 배송 서비스를 위한 배송 기사용 웹, 앱 서비스 구축',
                link: [
                    { title: '푸딩 배송기사 앱', content: 'https://play.google.com/store/apps/details?id=app.fooding.delivery' }
                ],
                youtube: 'https://www.youtube.com/embed/-IUGiugc8kM',
                mywork: [
                    { title: 'Backend', content: 'Express, JavaScript' },
                    { title: 'Frontend', content: 'Ionic, TypeScript, RxJs, Scss, Webpack, Firebase' },
                    { title: 'Server Build', content: 'Web server(Nginx), WAS(Node.js, HTTP, HTTPS), ACM' },
                    { title: 'Database', content: 'RDS(MySQL)' },
                    { title: 'Load Balancing', content: 'ALB, Route53' },
                    { title: 'Monitoring', content: 'CloudWatch' }
                ]
            },

            {
                title: '푸딩, 알림 서비스',
                subtitle: '소비자, 공급자 알림 서비스 구축',
                youtube: 'https://www.youtube.com/embed/hcjFL6LDWYQ',
                mywork: [
                    { title: 'Backend', content: 'Express, JavaScript' },
                    { title: 'Server Build', content: 'WAS(Node Js, HTTP, HTTPS), ACM' },
                    { title: 'Database', content: 'RDS(MySQL)' },
                    { title: 'Load Balancing', content: 'ALB, Route53' },
                    { title: 'Storage', content: 'S3, CloudFront' },
                    { title: 'Container Orchestration', content: 'Docker, EC2, ECR, ECS' },
                    { title: 'CI / CD', content: 'Github webhook, CodeBuild, CodePipeline' },
                    { title: 'Monitoring', content: 'CloudWatch' }
                ]
            },

            {
                title: '푸딩, 스케줄러 서비스',
                subtitle: '주문 현황 자동으로 변경하는 스케줄링 서버 개발',
                mywork: [
                    { title: 'Backend', content: 'Express, JavaScript' },
                    { title: 'Server Build', content: 'WAS(Node Js, HTTP, HTTPS), ACM' },
                    { title: 'Load balancing', content: 'ALB, Route53' },
                    { title: 'Container Orchestration', content: 'Docker, EC2, ECR, ECS' },
                    { title: 'CI / CD', content: 'Github webhook, CodeBuild, CodePipeline' },
                    { title: 'Monitoring', content: 'CloudWatch' }
                ]
            }
        ]
    },

    {
        name: '(주)씨큐프라임',
        date: '2017. 12. 01 ~ 2018. 09. 30',
        subtitle: '외식 프랜차이즈 전문 솔루션 회사에서 무인주문결제기(KIOSK)를 개발하였습니다.',
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
                mywork: [
                    { title: 'Backend', content: 'Express, JavaScript' },
                    { title: 'Frontend', content: 'EJS(Embedded JavaScript templates), HTML, CSS, jQuery' },
                    { title: 'Server Build', content: 'WAS(Node Js, HTTP)' },
                    { title: 'Database', content: 'Server in database(MariaDB)' },
                    { title: 'Load Balancing', content: 'PM2(Advanced Node Js Process manager)' }
                ]
            }
        ]
    }
];

export const Exps = (): JSX.Element => {
    return (
        <ExpContainer>
            <h2>Experience</h2>
            {ExpList.map(item => {
                return <Exp career={item} key={item.name} />
            })}
        </ExpContainer>
    )
};
