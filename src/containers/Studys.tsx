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
                date: '2018.06 ~ ',
                subtitle: '안드로이드 앱 / WPF 응용프로그램 / React Web 서버 구축',
                link: [
                    { title: '카카오 플러스 친구', content: 'https://pf.kakao.com/_yeVcj' },
                    { title: '네이버 예약', content: 'https://m.booking.naver.com/booking/6/bizes/233078?area=bbt&lang=ko' },
                    { title: 'Github', content: 'https://github.com/PIKUNIC/pikunic-service-api' }
                ],
                stack: [ 'Node.js', 'Javascript', 'Mysql', 'NCP(Naver Cloud Platform)' ],
                mywork: [
                    { title: 'RESTful API', content: "Express, knex(SQL Query builder), net(TCP Client)" },
                    { title: '서버 구축', content: 'WAS(Node.js, HTTP)' },
                    { title: '데이터베이스', content: 'Server in database(MySQL)' },
                    { title: '트래픽 로드 밸런싱', content: 'PM2(Advanced Node.js Process manager)' },
                    { title: '스토리지', content: 'Object storage' }
                ]
            },

            {
                title: '피쿠닉 관리자 페이지',
                date: '2018.08 ~ ',
                subtitle: '피쿠닉 서비스를 관리하기 위한 페이지 구축',
                link: [
                    { title: '참고 디자인', content: 'http://admin.lightsinthesky.io/docs' },
                    { title: 'Github', content: 'https://github.com/PIKUNIC/pikunic-admin-web' }
                ],
                stack: [ 'React', 'Redux', 'Node.js', 'Javascript' ],
                mywork: [
                    { title: 'Frontend', content: 'draft.js(Editor Framework), Webpack(Module bundler), babel(Javascript Compiler), grunt(Task Runner)' },
                    { title: 'Server Build', content: 'Web server(Ngnix), WAS(Node.js, HTTP, HTTPS)' }
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
