// import modules
import React from 'react';
import styled from 'styled-components';

// import components 
import { SkillList } from '../components';

// import interfaces
import { Skill } from '../interfaces/interface';

const SkillBox = styled.section`
`;

const Application: Array<Skill> = [
    { name: "Node.js", url: "/assets/skill/application/nodejs.png" },
    { name: "Javascript", url: "/assets/skill/application/javascript.jpeg" },
    { name: "Typescript", url: "/assets/skill/application/typescript.jpg" },

    { name: "Nginx", url: "/assets/skill/application/nginx.png" },
    { name: 'Apache HTTP', url: "/assets/skill/application/apache.jpg" },

    { name: "React", url: "/assets/skill/application/react.png" },
    { name: "Angular", url: "/assets/skill/application/angular.jpg" },

    { name: "GraphQL", url: "/assets/skill/application/graphql.png" },
    { name: "Apollo", url: "/assets/skill/application/apollo.png" },
    { name: "Prisma", url: "/assets/skill/application/prisma.jpg" }
];

const Aws: Array<Skill> = [
    { name: "EC2", url: "/assets/skill/aws/ec2.png" },
    { name: "ALB", url: "/assets/skill/aws/alb.png" },

    { name: "RDS", url: "/assets/skill/aws/rds.png" },

    { name: "S3", url: "/assets/skill/aws/s3.png" },

    { name: "ECR", url: "/assets/skill/aws/ecr.png" },
    { name: "ECS", url: "/assets/skill/aws/ecs.png" },

    { name: "CodeBuild", url: "/assets/skill/aws/codebuild.png" },
    { name: "CodePipeline", url: "/assets/skill/aws/codepipeline.png" },

    { name: "Lambda", url: "/assets/skill/aws/lambda.png" },
    { name: "API Gateway", url: "/assets/skill/aws/api-gateway.png" },

    { name: "Route53", url: "/assets/skill/aws/route53.png" },
    { name: "CloudFront", url: "/assets/skill/aws/cloudfront.png" },
    { name: "Certificate Manager", url: "/assets/skill/aws/acm.png" },

    { name: "IAM", url: "/assets/skill/aws/iam.png" },

    { name: "CloudTrail", url: "/assets/skill/aws/cloudtrail.png" },
    { name: "CloudFormation", url: "/assets/skill/aws/cloudformation.png" },
    { name: "CloudWatch", url: "/assets/skill/aws/cloudwatch.png" }
];

const Database: Array<Skill> = [
    { name: "MySQL", url: "/assets/skill/database/mysql.png" },
    { name: "MariaDB", url: "/assets/skill/database/mariadb.png" },
    { name: "MongoDB", url: "/assets/skill/database/mongodb.png" }
];

const Utilities: Array<Skill> = [
    { name: "Google Analytics", url: "/assets/skill/utilities/analytics.png" },
    { name: "Google Drive", url: "/assets/skill/utilities/drive.png" },
    { name: "Swagger", url: "/assets/skill/utilities/swagger.png" },
    { name: "Zeit Now", url: "/assets/skill/utilities/zeit.png" }
];

const DevOps: Array<Skill> = [
    { name: "GitHub", url: "/assets/skill/devops/github.png" },
    { name: "Docker", url: "/assets/skill/devops/docker.png" },
    { name: "Docker compose", url: "/assets/skill/devops/docker-compose.png" },
    { name: "Npm", url: "/assets/skill/devops/npm.png" },
    { name: "Yarn", url: "/assets/skill/devops/yarn.jpg" },
    { name: "Puppeteer", url: "/assets/skill/devops/puppeteer.png" },
    { name: "Mocha", url: "/assets/skill/devops/mocha.png" }
];

const Tools: Array<Skill> = [
    { name: 'Slack', url: '/assets/skill/tools/slack.jpg' },
    { name: "Visual Studio Code", url: "/assets/skill/tools/vscode.jpeg" },
    { name: "SourceTree", url: "/assets/skill/tools/sourcetree.png" },
    { name: "Zeplin", url: "/assets/skill/tools/zeplin.jpg" },
    { name: "Postman", url: "/assets/skill/tools/postman.png" },
    { name: "iTerm", url: "/assets/skill/tools/iterm.png" },
    { name: "Sequel Pro", url: "/assets/skill/tools/sequelpro.png" },
    { name: "QueryPie", url: "/assets/skill/tools/querypie.png" },
    { name: "MySQL Workbench", url: "/assets/skill/tools/workbench.jpeg" },
    { name: "Robo 3T", url: "/assets/skill/tools/robomongo.png" }
];

export const Skills = (): JSX.Element => {
    return (
        <SkillBox>
            <SkillList title="Application" list={Application} />
            <SkillList title="Aws" list={Aws} />
            <SkillList title="Database" list={Database} />
            <SkillList title="Utilities" list={Utilities} />
            <SkillList title="DevOps" list={DevOps} />
            <SkillList title="Tools" list={Tools} />
        </SkillBox>
    )
};
