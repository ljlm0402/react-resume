// import modules
import React from "react";
import styled from "styled-components";

// import components
import { SkillList } from "../components";

// import interfaces
import { Skill } from "../interfaces/interface";

const SkillBox = styled.section``;

const Application: Array<Skill> = [
  { name: "Node Js", url: "/assets/skill/application/nodejs.png" }, // 자바스크립트 런타임에 구축 된 플랫폼
  { name: "JavaScript", url: "/assets/skill/application/javascript.jpeg" }, // 객체 기반의 스크립트 프로그래밍 언어
  { name: "TypeScript", url: "/assets/skill/application/typescript.jpg" }, // 자바스크립트의 슈퍼셋인 오픈소스 프로그래밍 언어

  { name: "Nginx", url: "/assets/skill/application/nginx.png" }, // 트래픽이 많은 웹사이트 확장성을 위해 설계한 비동기 이벤트 기반 구조의 웹 서버
  { name: "Apache", url: "/assets/skill/application/apache.png" }, // HTTP 웹 서버

  { name: "Angular", url: "/assets/skill/application/angular.jpg" }, // 자바스크립트 기반의 오픈 소스 프론트엔드 웹 애플리케이션 프레임 워크
  { name: "NgRx", url: "/assets/skill/application/ngrx.png" }, // 앵귤러 상태관리 라이브러리
  { name: "RxJs", url: "/assets/skill/application/rxjs.png" }, // 비동기 및 이벤트 기반 프로그램을 작성하기 위한 라이브러리

  { name: "Vue.js", url: "/assets/skill/application/vuejs.png" }, // 자바스크립트 프론트엔드 라이브러리
  { name: "Vuex", url: "/assets/skill/application/vuex.png" }, // 뷰 상태관리 라이브러리
  { name: "Vue Router", url: "/assets/skill/application/vue-router.png" }, // 뷰 라우터 라이브러리

  { name: "Scss", url: "/assets/skill/application/sass.png" }, // css를 보완하기 위한 기술로, 스타일 시트 언어
];

const Aws: Array<Skill> = [
  { name: "EC2", url: "/assets/skill/aws/ec2.png" }, // 클라우드상의 가상 서버
  { name: "ALB", url: "/assets/skill/aws/alb.png" }, // 로드 밸런싱
  { name: "EBS", url: "/assets/skill/aws/ebs.png" }, // 고성능 블록 스토리지 서비스

  { name: "RDS", url: "/assets/skill/aws/rds.png" }, // 관리되는 관계형 데이터베이스 서비스
  { name: "DynamoDB", url: "/assets/skill/aws/dynamodb.png" }, // 관리형 NoSQL 데이터베이스

  { name: "S3", url: "/assets/skill/aws/s3.png" }, // 클라우드상의 확장 가능한 스토리지
  { name: "EKS", url: "/assets/skill/aws/eks.png" }, // aws 쿠버네티스 관리형 서비스

  { name: "ECR", url: "/assets/skill/aws/ecr.png" }, // 완전 관리형 Docker 컨테이너 레지스트리
  { name: "ECS", url: "/assets/skill/aws/ecs.png" }, // Docker 컨테이너 실행 및 관리

  { name: "CodeBuild", url: "/assets/skill/aws/codebuild.png" }, // 코드 빌드 및 테스트
  { name: "CodePipeline", url: "/assets/skill/aws/codepipeline.png" }, // 지속적인 전달을 사용한 소프트웨어 출시

  { name: "Lambda", url: "/assets/skill/aws/lambda.png" }, // 서버에 대한 걱정 없이 코드 실행
  { name: "API Gateway", url: "/assets/skill/aws/api-gateway.png" }, // API 구축, 배포 및 관리

  { name: "VPC", url: "/assets/skill/aws/vpc.png" }, // 격리형 클라우드 리소스
  { name: "Route 53", url: "/assets/skill/aws/route53.png" }, // 확장 가능한 DNS 및 도메인 이름 등록
  { name: "CloudFront", url: "/assets/skill/aws/cloudfront.png" }, // 전 세계 콘텐츠 전송 네트워크
  { name: "Certificate Manager", url: "/assets/skill/aws/acm.png" }, // SSL/TLS 인증서 프로비저닝, 관리 및 배포

  { name: "SES", url: "/assets/skill/aws/ses.png" }, // 클라우드 기반 이메일 발송 서비스입니다.
  { name: "SNS", url: "/assets/skill/aws/sns.png" }, // 완전 관리형 게시/구독 메시징 서비스입니다.
  { name: "Chatbot", url: "/assets/skill/aws/chatbot.png" }, // AWS 리소스를 쉽게 모니터링하고 상호 작용하도록 지원하는 대화형 에이전트

  { name: "IAM", url: "/assets/skill/aws/iam.png" }, // 사용자 액세스 및 암호화 키 관리

  { name: "CloudTrail", url: "/assets/skill/aws/cloudtrail.png" }, // 사용자 활동 및 API 사용 추적
  { name: "CloudFormation", url: "/assets/skill/aws/cloudformation.png" }, // 템플릿을 사용하여 리소스 생성 및 관리

  { name: "CloudWatch", url: "/assets/skill/aws/cloudwatch.png" }, // 리소스 및 애플리케이션 모니터링
];

const Database: Array<Skill> = [
  { name: "MySQL", url: "/assets/skill/database/mysql.png" }, // 관계형 데이터베이스 관리 시스템 (ORM: Object-relational mapping)
  { name: "MariaDB", url: "/assets/skill/database/mariadb.png" }, // MySQL과 동일한 소스 코드를 기반으로 한 관계형 데이터베이스 관리 시스템 (ORM: Object-relational mapping)
  { name: "PostgreSQL", url: "/assets/skill/database/postgresql.png" },
  { name: "MongoDB", url: "/assets/skill/database/mongodb.png" }, // 크로스 플랫폼 도큐먼트 지향 데이터베이스 시스템 (ODM: Object-document mapping)
  { name: "Redis", url: "/assets/skill/database/redis.png" },
];

const Utilities: Array<Skill> = [
  { name: "Google Analytics", url: "/assets/skill/utilities/analytics.png" }, // 웹 로그 분석
  { name: "Google AdSense", url: "/assets/skill/utilities/adsense.jpg" }, // 구글 광고
  {
    name: "Google Tag Manager",
    url: "/assets/skill/utilities/tag-manager.png",
  }, // 태그 및 코드 업데이트
  { name: "Google Drive", url: "/assets/skill/utilities/drive.png" }, // 클라우드 기반 협업도구이자 파일저장/공유 서비스
  { name: "Swagger", url: "/assets/skill/utilities/swagger.png" }, // RESTful 웹 서비스를 설계, 빌드, 문서화 도구
  { name: "Vercel", url: "/assets/skill/utilities/vercel.png" }, // 정적 사이트 및 서버리스 기능을 위한 클라우드 플랫폼
  { name: "Netlify", url: "/assets/skill/utilities/netlify.png" }, // 지속적 배포, 서버리스 기능을 갖춘 클라우드 플랫폼
  { name: "Surge", url: "/assets/skill/utilities/surge.jpeg" }, // 지속적 배포, 서버리스 기능을 갖춘 클라우드 플랫폼
  { name: "Heroku", url: "/assets/skill/utilities/heroku.png" }, // 지속적 배포, 서버리스 기능을 갖춘 클라우드 플랫폼
];

const DevOps: Array<Skill> = [
  { name: "GitHub", url: "/assets/skill/devops/github.png" }, // 프로그램 등의 소스 코드 관리를 위한 분산 버전 관리 시스템
  { name: "Bitbucket", url: "/assets/skill/devops/bitbucket.png" }, // 아틀리시안 분산 버전 관리 시스템

  { name: "Docker", url: "/assets/skill/devops/docker.png" }, // 컨테이너를 사용해 어플리케이션을 신속하게 구축, 테스트 및 배포할 수 있는 소프트웨어 플랫폼
  { name: "Docker Compose", url: "/assets/skill/devops/docker-compose.png" }, // 멀티 컨테이너 Docker 응용 프로그램을 정의하고 실행하기위한 도구
  { name: "Kubernets", url: "/assets/skill/devops/kubernets.png" },

  { name: "Elasticsearch", url: "/assets/skill/devops/elasticsearch.png" }, // 루씬 기반의 검색 엔진
  { name: "Logstash", url: "/assets/skill/devops/logstash.png" }, // 실시간 파이프라인 기능을 가진 오픈소스 데이터 수집 엔진
  { name: "Kibana", url: "/assets/skill/devops/kibana.png" }, // Elasticsearch 데이터를 시각화하고 Elastic Stack을 탐색하게 해주는 무료 오픈 소스 인터페이스

  { name: "npm", url: "/assets/skill/devops/npm.png" }, // 자바스크립트 패키지 관리자
  { name: "Yarn", url: "/assets/skill/devops/yarn.jpg" }, // 자바스크립트 패키지 관리자

  { name: "Webpack", url: "/assets/skill/devops/webpack.png" }, // 자바스크립트 모듈 번들러
  { name: "Babel", url: "/assets/skill/devops/babel.png" }, // 다음 버전의 자바스크립트 문법을 현재 사용 가능한 문법으로 변환
  { name: "ESLint", url: "/assets/skill/devops/eslint.jpg" }, // 자바스크립트 코드 품질 도구
  { name: "TSLint", url: "/assets/skill/devops/tslint.png" }, // 타입스크립트 코드 품질 도구
  { name: "Prettier", url: "/assets/skill/devops/prettier.png" }, // 코드 포맷터

  { name: "Travis CI", url: "/assets/skill/devops/travis.jpeg" }, // 오픈 소스 및 개인 프로젝트를위한 호스팅 된 지속적인 통합 서비스
  { name: "Github Actions", url: "/assets/skill/devops/github-actions.png" }, // CI / CD 모든 소프트웨어 워크 플로우를 쉽게 자동화
  { name: "Bamboo", url: "/assets/skill/devops/bamboo.png" }, // 아틀리시안 CI / CD 툴

  // { name: 'Mocha', url: '/assets/skill/devops/mocha.png' }, // 자바스크립트 테스트 프레임 워크
  { name: "Jest", url: "/assets/skill/devops/jest.png" }, // 자바스크립트 테스트 프레임 워크

  { name: "Puppeteer", url: "/assets/skill/devops/puppeteer.png" }, // Headless chrome API
];

const Tools: Array<Skill> = [
  { name: "Slack", url: "/assets/skill/tools/slack.jpg" }, // 클라우드 기반 팀 협업 도구
  { name: "Notion", url: "/assets/skill/tools/notion.jpg" }, // 노트 앱

  { name: "Jira", url: "/assets/skill/tools/jira.png" }, // 웹 기반의 프로젝트 관리
  { name: "Confluence", url: "/assets/skill/tools/confluence.png" },
  { name: "Trello", url: "/assets/skill/tools/trello.png" }, // 웹 기반의 프로젝트 관리

  { name: "JANDI", url: "/assets/skill/tools/jandi.png" }, // 업무를 위한 팀 커뮤니케이션

  { name: "Visual Studio Code", url: "/assets/skill/tools/vscode.jpeg" }, // 마이크로소프트가 만든 소스 코드 편집기
  { name: "Atom", url: "/assets/skill/tools/atom.png" }, // Github가 개발한 소스코드 편집기

  { name: "ndm", url: "/assets/skill/tools/ndm.png" }, // npm desktop manager

  { name: "Sequel Pro", url: "/assets/skill/tools/sequelpro.png" }, // 오픈소스 MySQL 데이터베이스 도구
  { name: "QueryPie", url: "/assets/skill/tools/querypie.png" }, // Database IDE
  { name: "MySQL WorkBench", url: "/assets/skill/tools/workbench.jpeg" }, // SQL 개발과 관리, 데이터베이스 설계, 생성 유지를 위한 데이터베이스 설계 도구
  { name: "Robomongo", url: "/assets/skill/tools/robomongo.png" }, // MongoDB 관리 툴

  { name: "GitHub Desktop", url: "/assets/skill/tools/github-desktop.png" }, // Git GUI
  { name: "SourceTree", url: "/assets/skill/tools/sourcetree.png" }, // Git GUI

  { name: "iTerm", url: "/assets/skill/tools/iterm.png" }, // macOS 용 GPL 라이센스 터미널 에뮬레이터
  { name: "Postman", url: "/assets/skill/tools/postman.png" }, // 웹 API 테스트 환경을 지원하는 프로그램

  { name: "Zeplin", url: "/assets/skill/tools/zeplin.jpg" }, // 디자인 가이드 자동화 툴
];

export const Skills = (): JSX.Element => {
  return (
    <SkillBox>
      <h1>Skill</h1>
      <SkillList title="Application" list={Application} />
      <SkillList title="AWS" list={Aws} />
      <SkillList title="Database" list={Database} />
      <SkillList title="Utilities" list={Utilities} />
      <SkillList title="DevOps" list={DevOps} />
      <SkillList title="Tools" list={Tools} />
    </SkillBox>
  );
};
