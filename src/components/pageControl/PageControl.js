import { useState } from "react";
import { FaEdit, FaTrash, FaCopy } from "react-icons/fa";

export default function PageControl() {
    const [showFlag, setShowFlag] = useState(false);

    const ToggleShow = () => {
        setShowFlag(!showFlag);
    }

    return (
        <div>
            <div className="group bg-gray-600 h-10 rounded-l-md flex justify-center items-center fixed top-20 right-0 pr-2 hover:pl-2">
                <a href="#" className="text-white hidden group-hover:block" onClick={ToggleShow}>
                    <FaEdit color="#fff" />
                </a>
            </div>
            <div className="bg-gray-600 w-48 rounded-l-md fixed top-30 right-0 py-3" style={showFlag ? {display: "block"} : {display: "none"}}>
                <ul className="text-white">
                    <li className="px-6 py-2 flex items-center hover:bg-gray-500">
                        <FaEdit className="mr-4" />
                        Edit Page
                    </li>
                    <li className="px-6 py-2 flex items-center hover:bg-gray-500">
                        <FaTrash className="mr-4" />
                        Delete Page
                    </li>
                    <li className="px-6 py-2 flex items-center hover:bg-gray-500">
                        <FaCopy className="mr-4" />
                        Clone Page
                    </li>
                </ul>
            </div>
        </div>
    )
}