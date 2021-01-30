import { useState } from "react";
import Header from "../components/header";
import Lunchpad from "../components/lunchpad";
import Container from "../layouts/main/container";
import Article from "../components/article";
import UserGroup from "../components/userGroup";

export default function Home() {
    const [sassCompanies, setSassCompanies] = useState([
        {
            companyName: 'Salesforce',
            companyLogo: '/images/companies/salesforce.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Microsoft',
            companyLogo: '/images/companies/microsoft.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Adobe Creative Cloud',
            companyLogo: '/images/companies/aws.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Box',
            companyLogo: '/images/companies/salesforce.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'AWS SaaS',
            companyLogo: '/images/companies/aws.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Google G Suite',
            companyLogo: '/images/companies/office365.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Slack',
            companyLogo: '/images/companies/slack.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Zendesk',
            companyLogo: '/images/companies/slack.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'ADP',
            companyLogo: '/images/companies/quickbooks.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Oracle',
            companyLogo: '/images/companies/slack.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'DocuSign',
            companyLogo: '/images/companies/docusign.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Cisco',
            companyLogo: '/images/companies/quickbooks.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'ServiceNow',
            companyLogo: '/images/companies/dropbox.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'GoToMeeting',
            companyLogo: '/images/companies/gotomeeting.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'GitHub',
            companyLogo: '/images/companies/slack.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Workday',
            companyLogo: '/images/companies/workday.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'HubSpot',
            companyLogo: '/images/companies/dropbox.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Twilio',
            companyLogo: '/images/companies/slack.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Coupa Software',
            companyLogo: '/images/companies/quickbooks.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Atlassian',
            companyLogo: '/images/companies/dropbox.png',
            companyURL: 'https://www.google.com',
        },
    ]);

    const [articles, setArticles] = useState([
        {
            category: 'Latest news',
            featuredImage: '/images/article.jpg',
            title: 'Suspendisse eleifend conguehibh eu ultricies',
            info: 'In varius, orci eget fermentum laoreet, lacus metus accumsan erat, ut hendrerit enim nulla in metus',
            author: 'Victoria Summers',
            pubDate: '28 Jan 2021',
            commentCounts: 12,
            voteCounts: 4
        },
        {
            category: 'Latest news',
            featuredImage: '/images/article.jpg',
            title: 'Suspendisse eleifend conguehibh eu ultricies',
            info: 'In varius, orci eget fermentum laoreet, lacus metus accumsan erat, ut hendrerit enim nulla in metus',
            author: 'Victoria Summers',
            pubDate: '28 Jan 2021',
            commentCounts: 12,
            voteCounts: 4
        },
        {
            category: 'Latest news',
            featuredImage: '/images/article.jpg',
            title: 'Suspendisse eleifend conguehibh eu ultricies',
            info: 'In varius, orci eget fermentum laoreet, lacus metus accumsan erat, ut hendrerit enim nulla in metus',
            author: 'Victoria Summers',
            pubDate: '28 Jan 2021',
            commentCounts: 12,
            voteCounts: 4
        },
        {
            category: 'Latest news',
            featuredImage: '/images/article.jpg',
            title: 'Suspendisse eleifend conguehibh eu ultricies',
            info: 'In varius, orci eget fermentum laoreet, lacus metus accumsan erat, ut hendrerit enim nulla in metus',
            author: 'Victoria Summers',
            pubDate: '28 Jan 2021',
            commentCounts: 12,
            voteCounts: 4
        },
        {
            category: 'Latest news',
            featuredImage: '/images/article.jpg',
            title: 'Suspendisse eleifend conguehibh eu ultricies',
            info: 'In varius, orci eget fermentum laoreet, lacus metus accumsan erat, ut hendrerit enim nulla in metus',
            author: 'Victoria Summers',
            pubDate: '28 Jan 2021',
            commentCounts: 12,
            voteCounts: 4
        },
        {
            category: 'Latest news',
            featuredImage: '/images/article.jpg',
            title: 'Suspendisse eleifend conguehibh eu ultricies',
            info: 'In varius, orci eget fermentum laoreet, lacus metus accumsan erat, ut hendrerit enim nulla in metus',
            author: 'Victoria Summers',
            pubDate: '28 Jan 2021',
            commentCounts: 12,
            voteCounts: 4
        },
    ]);

    const [userGroups, setUserGroups] = useState([
        {
            groupTitle: 'Welcome New Hires!',
            users: [
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
            ]
        },
        {
            groupTitle: 'Support Team',
            users: [
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
            ]
        },
        {
            groupTitle: 'Management Team',
            users: [
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
                {
                    userName: 'User Name',
                    avatar: '/images/avatar.jpg',
                    profile: 'https://www.google.com'
                },
            ]
        },
    ]);

    return (
        <div className="main bg-gray-50">
            <Header />
            <Container>
                <h1 className="font-medium text-2xl text-right text-gray-800 mb-8 sm:mb-12 mr-2">Lunchpad</h1>
                <div className="lunchpads-contaier flex flex-wrap mb-16">
                    {
                        sassCompanies.map((company, index) =>
                            <div className="lunchpad-wrap w-1/2 p-1 sm:w-1/4 md:w-1/5 lg:w-1/10" key={index}>
                                <Lunchpad company={company} />
                            </div>
                        )
                    }
                </div>
                
                <div className="content-wrap bg-light-blue-400 p-4 mb-12">
                    <div className="content max-w-6xl mx-auto">
                        <div className="blog-list flex flex-wrap">
                            {
                                articles.map((article, i) => 
                                    <div className="article-wrap mb-4 w-full md:w-1/2 md:px-2 lg:w-1/3" key={i}>
                                        <Article article={article} />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <UserGroup />
                        </div>
                        <div>
                            <UserGroup />
                        </div>
                        <div>
                            <UserGroup />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}