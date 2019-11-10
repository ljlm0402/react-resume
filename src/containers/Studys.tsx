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
                title: 'RESTful API 구축',
                subtitle: '안드로이드 앱 / WPF 응용프로그램 / React Web RESTful API 서버 구축',
                link: [
                    { title: '카카오 플러스 친구', content: 'https://pf.kakao.com/_yeVcj' },
                    { title: '네이버 예약', content: 'https://m.booking.naver.com/booking/6/bizes/233078?area=bbt&lang=ko' },
                    { title: 'GitHub', content: 'https://github.com/PIKUNIC/pikunic-service-api' }
                ],
                mywork: [
                    { title: 'Backend', content: 'Express, JavaScript' },
                    { title: 'Server Build', content: 'WAS(Node Js, HTTP), NCP' },
                    { title: 'Database', content: 'Server in database(MySQL)' },
                    { title: 'Load Balancing', content: 'PM2(Advanced Node Js Process manager)' },
                    { title: 'Storage', content: 'Object storage' }
                ]
            },

            {
                title: '피쿠닉 관리자',
                subtitle: '피쿠닉 서비스를 관리하기 위한 페이지 구축',
                link: [
                    { title: '참고 디자인', content: 'http://admin.lightsinthesky.io/docs' },
                    { title: 'GitHub', content: 'https://github.com/PIKUNIC/pikunic-admin-web' }
                ],
                mywork: [
                    { title: 'Frontend', content: 'React, TypeScript, Scss, Webpack' },
                    { title: 'Server Build', content: 'Web server(Ngnix), WAS(Node Js, HTTP), NCP' },
                    { title: 'Storage', content: 'Object storage' }
                ]
            }
        ]
    },

    {
        name: '개발 블로그',
        subtitle: '정적 페이지 호스팅 서비스를 이용하여 개인 개발 블로그 제작',
        studys: [
            {
                link: [
                    { title: '블로그 링크', content: 'https://ljlm0402.netlify.com/' },
                    { title: 'GitHub', content: 'https://github.com/ljlm0402/blog' }
                ],
                mywork: [
                    { title: 'Frontend', content: 'React, Gatsby, JavaScript, Scss, Markdown' },
                    { title: 'Server Build', content: 'Node Js, Netlify, Github webhook' },
                    { title: 'Comments Service', content: 'Github utterances' }
                ]
            }
        ]
    },

    {
        name: '이력서',
        subtitle: '정적 페이지 호스팅 서비스를 이용하여 개인 이력서 홈페이지 제작',
        studys: [
            {
                link: [
                    { title: '이력서 링크', content: 'https://resume.ljlm0402.now.sh' },
                    { title: 'GitHub', content: 'https://github.com/ljlm0402/resume' }
                ],
                mywork: [
                    { title: 'Frontend', content: 'React, TypeScript, Scss, styled-components' },
                    { title: 'Server Build', content: 'Node Js, Zeit Now, Github webhook' }
                ]
            }
        ]
    },

    { 
        name: 'DEVLOG',
        subtitle: 'github.io 도메인을 사용하여 다양한 정보를 공유하는 사이트를 제작',
        studys: [
            {
                link: [
                    { title: "페이스북 링크", content: "https://www.facebook.com/groups/765872100510405/?ref=bookmarks" },
                    { title: "카카오 링크", content: "https://open.kakao.com/o/gJcENvHb" },
                    { title: "깃페이지 링크", content: "https://ljlm0402.github.io/" },
                    { title: "GitHub", content: "https://github.com/ljlm0402/ljlm0402.github.io" }
                ],
                mywork: [
                    { title: "Frontend", content: "Hexo - Melody, fancybox, fireworks" },
                    { title: "Server Build", content: "GitHub Pages" }
                ]
            }
        ]
    },

    {
        name: "TS-Express",
        subtitle: 'TypeScript Express REST API 개발',
        studys: [
            {
                link: [
                    { title: "GitHub", content: "https://github.com/ts-for-js/ts-express" }
                ],
                mywork: [
                    { title: "Backend", content: "Node Js, TypeScript" },
                    { title : "Database", content: "mongoDB, moongoose" },
                    { title: "Testing", content: "Jest, supertest" },
                    { title: "Lint", content: "TSLint" },
                    { title: "CI / CD", content: "Travis CI / Heroku" } 
                ]
            }
        ]
    }
];

export const Studys = (): JSX.Element => {
    return (
        <StudyContainer>
            <h2>Project</h2>
            {StudyList.map(item => {
                return <Study study={item} key={item.name} />
            })}
        </StudyContainer>
    )
};
