import { useState } from 'react';
import Department from "./Department";
import NextIcon from '../icons/Next';

export default function Departments() {
    const [departments, setDepartments] = useState([
        {
            title: 'Human Resources',
            property: 'A space dedicated to all your human resources needs and questions.',
            img: '/images/depart1.png'
        },
        {
            title: 'Internal Communications',
            property: 'The space for accessing all of the company\'s internal communications.',
            img: '/images/depart2.png'
        },
        {
            title: 'Infomation Technology',
            property: 'Submit your help desk and tech questions here.',
            img: '/images/depart3.jpg'
        },
        {
            title: 'Company Announcements',
            property: 'Get the latest company news, updates, and announcements.',
            img: '/images/depart4.png'
        },
    ])
    return(
        <div className="departments rounded-md overflow-hidden shadow py-4 bg-white">
            <h3 className={'font-medium px-5'}>Departments</h3>
            <div className="department-content">
                <ul>
                    {
                        departments.map((depart, index) => <Department department={depart} />)
                    }
                </ul>
            </div>
            <p className="widget-footer text-right px-5 text-xs text-gray-500 font-medium">
                <a href="#">
                    View All Spaces 
                    <NextIcon iconColor="text-gray-500" />
                </a>
            </p>
        </div>
    )
}