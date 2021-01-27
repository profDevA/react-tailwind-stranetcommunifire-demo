export default function Department({department}) {
    return (
        <li>
            <a href="#" className="flex py-2.5 px-5 hover:bg-gray-200">
                <div className="space-photo w-12">
                    <img src={department.img} alt="" className={'w-full rounded-lg'} />
                </div>
                <div className="space-info ml-4 flex-1">
                    <p className="title font-medium">{department.title}</p>
                    <p className="property text-sm text-gray-500">{department.property}</p>
                </div>
            </a>
        </li>
    )
}