import { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Lunchpad from "../components/lunchpad";
import Container from "../layouts/main/container";
import Article from "../components/article";
import UserGroup from "../components/userGroup";
import Tweets from "../components/tweets";
import PageControl from "../components/pageControl";

export default function Home() {
    const [sassCompanies, setSassCompanies] = useState([
        {
            companyName: 'Salesforce',
            companyLogo: '/images/companies/salesforce.png',
            companyURL: 'https://www.salesforce.com/',
        },
        {
            companyName: 'Microsoft',
            companyLogo: '/images/companies/microsoft.png',
            companyURL: 'https://www.microsoft.com',
        },
        {
            companyName: 'Adobe Creative Cloud',
            companyLogo: '/images/companies/Creative_Cloud.png',
            companyURL: 'https://www.adobe.com/',
        },
        {
            companyName: 'Box',
            companyLogo: '/images/companies/box.png',
            companyURL: 'https://www.box.com',
        },
        {
            companyName: 'AWS SaaS',
            companyLogo: '/images/companies/aws.png',
            companyURL: 'https://www.aws.amazon.com',
        },
        {
            companyName: 'Google G Suite',
            companyLogo: '/images/companies/Gsuite-logo.png',
            companyURL: 'https://www.gsuite.google.com',
        },
        {
            companyName: 'Slack',
            companyLogo: '/images/companies/slack.png',
            companyURL: 'https://www.slack.com',
        },
        {
            companyName: 'Zendesk',
            companyLogo: '/images/companies/zendesk.png',
            companyURL: 'https://www.Zendesk.com',
        },
        {
            companyName: 'ADP',
            companyLogo: '/images/companies/adp.png',
            companyURL: 'https://www.adp.com',
        },
        {
            companyName: 'Oracle',
            companyLogo: '/images/companies/oracle.jpg',
            companyURL: 'https://www.oracle.com',
        },
        {
            companyName: 'DocuSign',
            companyLogo: '/images/companies/docusign.png',
            companyURL: 'https://www.google.com',
        },
        {
            companyName: 'Cisco',
            companyLogo: '/images/companies/cisco.png',
            companyURL: 'https://www.cisco.com',
        },
        {
            companyName: 'ServiceNow',
            companyLogo: '/images/companies/servicenow.svg',
            companyURL: 'https://www.servicenow.com',
        },
        {
            companyName: 'GoToMeeting',
            companyLogo: '/images/companies/gotomeeting.png',
            companyURL: 'https://www.GoToMeeting.com',
        },
        {
            companyName: 'GitHub',
            companyLogo: '/images/companies/github.png',
            companyURL: 'https://www.github.com',
        },
        {
            companyName: 'Workday',
            companyLogo: '/images/companies/workday.png',
            companyURL: 'https://www.workday.com',
        },
        {
            companyName: 'HubSpot',
            companyLogo: '/images/companies/hubspot.png',
            companyURL: 'https://www.hubspot.com',
        },
        {
            companyName: 'Twilio',
            companyLogo: '/images/companies/twillo.png',
            companyURL: 'https://www.twillo.com',
        },
        {
            companyName: 'Coupa Software',
            companyLogo: '/images/companies/coupa.png',
            companyURL: 'https://www.coupa.com',
        },
        {
            companyName: 'Atlassian',
            companyLogo: '/images/companies/atlassian.jpg',
            companyURL: 'https://www.atlassian.com',
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
                <h1 className="font-medium text-2xl text-right text-gray-800 mt-4 sm:mt-6 mb-8 sm:mb-12 mr-2">Lunchpad</h1>
                <div className="lunchpads-contaier flex flex-wrap mb-16">
                    {
                        sassCompanies.map((company, index) =>
                            <div className="lunchpad-wrap w-1/2 p-1 sm:w-1/4 md:w-1/5 lg:w-1/10" key={index}>
                                <Lunchpad company={company} />
                            </div>
                        )
                    }
                </div>

                <div className="content-wrap bg-light-blue-400 p-4 mb-16">
                    <div className="content max-w-6xl mx-auto mb-14">
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
                    <div className="md:flex md:justify-between max-w-6xl mx-auto">
                        <div className="md:px-2">
                            <div className="mb-6">
                                <UserGroup usersData={userGroups[0]} />
                            </div>
                            <div className="mb-6">
                                <UserGroup usersData={userGroups[1]} />
                            </div>
                            <div className="mb-6">
                                <UserGroup usersData={userGroups[2]} />
                            </div>
                        </div>
                        <div className="md:px-2 md:w-2/5">
                            <Tweets />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
            <PageControl />
        </div>
    )
}