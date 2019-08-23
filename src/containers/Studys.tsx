// import modules
import React from 'react';
import styled from 'styled-components';

// import components 
import { Study } from '../components';

// import interfaces
import { IStudyList } from '../interfaces/interface';

const StudyContainer = styled.section`
    padding: 5% 10%;
    margin-top: 30px;
    border: 1px solid black;
    background-color: white;
    color: black;
`;

const StudyList: Array<IStudyList> = [
    {
        name: '피쿠닉',
        subtitle: '뚝섬유원지에서 즐기는 피크닉 딜리버리 서비스, 서버 구성 및 관리자 페이지 구축',
        icon: '/assets/study/pikunic.jpg',
        studys: [
            {
                title: 'API 서버 구축',
                subtitle: '안드로이드 앱 / WPF 응용프로그램 / React Web 서버 구축',
                link: [
                    { title: '카카오 플러스 친구', content: 'https://pf.kakao.com/_yeVcj' },
                    { title: '네이버 예약', content: 'https://m.booking.naver.com/booking/6/bizes/233078?area=bbt&lang=ko' },
                    { title: 'Github', content: 'https://github.com/PIKUNIC/pikunic-service-api' }
                ],
                stack: [ 'Node.js', 'Javascript', 'Mysql', 'NCP(Naver Cloud Platform)' ],
                mywork: [
                    { title: 'RESTful API', content: 'Express, knex(SQL Query builder), net(TCP Client)' },
                    { title: 'Server Build', content: 'WAS(Node.js, HTTP)' },
                    { title: 'Database', content: 'Server in database(MySQL)' },
                    { title: 'Load Balancing', content: 'PM2(Advanced Node.js Process manager)' },
                    { title: 'Storage', content: 'Object storage' }
                ]
            },

            {
                title: '피쿠닉 관리자 페이지',
                subtitle: '피쿠닉 서비스를 관리하기 위한 페이지 구축',
                link: [
                    { title: '참고 디자인', content: 'http://admin.lightsinthesky.io/docs' },
                    { title: 'Github', content: 'https://github.com/PIKUNIC/pikunic-admin-web' }
                ],
                stack: [ 'React', 'Redux', 'Webpack', 'Bable', 'Grunt', 'Node.js', 'Javascript' ],
                mywork: [
                    { title: 'Server Build', content: 'Web server(Ngnix), WAS(Node.js, HTTP, HTTPS)' },
                    { title: 'Front', content: 'draft.js(Editor Framework)' }
                ]
            }
        ]
    },

    {
        name: '블로그',
        subtitle: '나만의 개발 블로그 구축',
        studys: [
            {
                title: '나만의 블로그를 만들어보자',
                subtitle: 'Gatsby라는 React 기반의 Static Web Generator를 사용하여 정적 웹사이트 제작',
                link: [
                    { title: '블로그 링크', content: 'https://ljlm0402.netlify.com/' },
                    { title: 'Github', content: 'https://github.com/ljlm0402/blog' }
                ],
                stack: [ 'React', 'Gastsby', 'Node.js', 'Javascript', 'Netlify' ],
                mywork: [
                    { title: 'Server Build', content: 'Github hook, netlify' },
                    { title: 'Front', content: 'Markdown page upload' },
                    { title: 'Comments Service', content: 'Github utterances' }
                ]
            }
        ]
    }
];

export const Studys = (): JSX.Element => {
    return (
        <StudyContainer>
            <h2>Study</h2>
            {StudyList.map(item => {
                return <Study study={item} key={item.name} />
            })}
        </StudyContainer>
    )
};
