import React from 'react';
import {
    SiAndroid, SiAtlassian, SiCplusplus, SiCsharp, SiCss3, SiDocker, SiGit, SiGraphql, SiHtml5, SiJava, SiJavascript, SiMicrosoftoffice, SiMysql,
    SiPostgresql, SiPostman, SiReact, SiSpringboot, SiUnity
} from 'react-icons/si';

export const skills = [
    {
        name: 'web',
        skills: [
            {
                name: 'HTML',
                icon: <SiHtml5/>
            },
            {
                name: 'CSS',
                icon: <SiCss3/>
            },
            {
                name: 'Javascript',
                icon: <SiJavascript/>
            },
            {
                name: 'ReactJS',
                icon: <SiReact/>
            }
        ]
    },
    {
        name: 'language',
        skills: [
            {
                name: 'CPlusPlus',
                icon: <SiCplusplus/>
            },
            {
                name: 'CSharp',
                icon: <SiCsharp/>
            },
            {
                name: 'Java',
                icon: <SiJava/>
            },
            {
                name: 'Spring Boot',
                icon: <SiSpringboot/>
            }
        ]
    },
    {
        name: 'utilities',
        skills: [
            {
                name: 'Git/Github',
                icon: <SiGit/>
            },
            {
                name: 'Atlassian/Bitbucket',
                icon: <SiAtlassian/>
            },
            {
                name: 'Docker',
                icon: <SiDocker/>
            },
            {
                name: 'Postman',
                icon: <SiPostman/>
            }
        ]
    },
    {
        name: 'database',
        skills: [
            {
                name: 'MySQL',
                icon: <SiMysql/>
            },
            {
                name: 'PostgreSQL',
                icon: <SiPostgresql/>
            },
            {
                name: 'GraphQL',
                icon: <SiGraphql/>
            }
        ]
    },
    {
        name: 'other',
        skills: [
            {
                name: 'Android',
                icon: <SiAndroid/>
            },
            {
                name: 'Unity',
                icon: <SiUnity/>
            },
            {
                name: 'MS Office',
                icon: <SiMicrosoftoffice/>
            }
        ]
    }
];