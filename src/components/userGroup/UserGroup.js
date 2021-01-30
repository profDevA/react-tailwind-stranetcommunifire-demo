export default function UserGroup({usersData}) {
    return(
        <div className="bg-gray-100 p-4">
            <h3 className=" text-xl mb-4">{usersData.groupTitle}</h3>
            <div className="flex justify-between">
                {
                    usersData.users.map((user, index) =>
                        <div className="group w-14 mr-3 last:mr-0" key={index}>
                            <a href="" className="cursor-pointer">
                                <img src={user.avatar} alt={user.userName} className="rounded-full border-2 border-transparent group-hover:border-cyan-500" />
                            </a>
                        </div>
                    )
                }
            </div>
        </div>
    )
}