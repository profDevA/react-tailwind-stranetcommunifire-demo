

export default function AxeroWidget({ widData }) {
    const style = {
        backgroundImage: `url(${widData.bg})`,
        backgroundPosition: '25% 50%',
        backgroundOrigin: 'border-box',
        backgroundSize: 'cover',
    }

    return (
        <div className={'wid-wrapper rounded-md h-80 bg-gray-600 p-6 relative after:opacity-el overflow-hidden'} style={style}>
            <div className="z-10 absolute">
                <div className="badge">
                    <a href="#" className={'text-white uppercase text-xss bg-orange-500 rounded-2xl px-2 py-1'}>Human Resources</a>
                </div>
                <h3 className={'my-4 text-2xl mb-36'}>
                    <a href="" className="text-white font-medium">
                        {widData.title}
                    </a>
                </h3>
                <div className="p-user">
                    <div className="p-avatar">
                        <img src="" />
                    </div>
                    <div className="p-userinfo">
                        <p className="username">
                            <a href="#">
                                {widData.author}
                            </a>
                        </p>
                        <p className="pubdate">{widData.pubDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}