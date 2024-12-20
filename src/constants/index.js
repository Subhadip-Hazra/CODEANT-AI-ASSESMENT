import { Azure, BigBusket, Book, Call, Cloud, CodeEditor, Exit, Github, GitLab, Home, Settings, SSO } from "../assets/icons"


export const RepositoryData = [
    {
        "id": 1,
        "repoName": "design-system",
        "technologyUsed": "React",
        "storage": "5432 KB",
        "updationTime": "1",
        "repositoryStatus": "public",
        "link":''
    },
    {
        "id": 2,
        "repoName": "codeant-ci-app",
        "technologyUsed": "Javascript",
        "storage": "1876 KB",
        "updationTime": "2",
        "repositoryStatus": "private",
        "link":''
    },
    {
        "id": 3,
        "repoName": "analytics-dashboard",
        "technologyUsed": "Python",
        "storage": "6210 KB",
        "updationTime": "5",
        "repositoryStatus": "private",
        "link":''
    },
    {
        "id": 4,
        "repoName": "mobile-app",
        "technologyUsed": "Swift",
        "storage": "3096 KB",
        "updationTime": "3",
        "repositoryStatus": "public",
        "link":''
    },
    {
        "id": 5,
        "repoName": "e-commerce-platform",
        "technologyUsed": "Java",
        "storage": "4521 KB",
        "updationTime": "6",
        "repositoryStatus": "private",
        "link":''
    },
    {
        "id": 6,
        "repoName": "blog-website",
        "technologyUsed": "HTML/CSS",
        "storage": "5871 KB",
        "updationTime": "4",
        "repositoryStatus": "public",
        "link":''

    },
    {
        "id": 7,
        "repoName": "social-network",
        "technologyUsed": "PHP",
        "storage": "7320 KB",
        "updationTime": "7",
        "repositoryStatus": "private",
        "link":''
    }
]

export const SSLLoginOptionsData = [

    {
        "id": 1,
        "title": "Sign in with Github",
        "imageSrc": Github,
        "alt": "github",
    },
    {
        "id": 2,
        "title": "Sign in with Bitbucket",
        "imageSrc": BigBusket,
        "alt": "bitbusket",
    },
    {
        "id": 3,
        "title": "Sign in with Azure Devops",
        "imageSrc": Azure,
        "alt": "azure",
    },
    {
        "id": 4,
        "title": "Sign in with GitLab",
        "imageSrc": GitLab,
        "alt": "gitlab",
    }
]

export const SelfHostedData = [

    {
        "id": 1,
        "title": "Self Hosted GitLab",
        "imageSrc": GitLab,
        "alt": "gitlab",
    },
    {
        "id": 2,
        "title": "Sign in with SSO",
        "imageSrc": SSO,
        "alt": "sso",
    }
]

export const NavBarOptions = [
    {
        "id": 1,
        "title": 'Repository',
        'imageSrc': Home
    },
    {
        "id": 2,
        "title": 'AI Code Review',
        'imageSrc': CodeEditor
    },
    {
        "id": 3,
        "title": 'Cloud Security',
        'imageSrc': Cloud
    },
    {
        "id": 4,
        "title": 'How to Use',
        'imageSrc': Book
    },
    {
        "id": 5,
        "title": 'Settings',
        'imageSrc': Settings
    }, {
        "id": 6,
        "title": 'Support',
        'imageSrc': Call
    }, {
        "id": 7,
        "title": 'Logout',
        'imageSrc': Exit
    }
]