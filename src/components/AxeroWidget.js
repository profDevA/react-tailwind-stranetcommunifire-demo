import styles from '../styles/components.css';

export default function AxeroWidget({ widData }) {
    const style = {
        backgroundImage: `url(${widData.bg})`,
        backgroundPosition: '25% 50%',
        backgroundOrigin: 'border-box',
        backgroundSize: 'cover',
    }

    return (
        <div className={'wid-wrapper rounded-md h-80 bg-gray-600 p-6 relative after:opacity-el overflow-hidden shadow-sm'} style={style}>
            <div className="z-10 absolute">
                <div className="badge">
                    <a href="#" className={'text-white uppercase text-xss bg-orange-500 rounded-2xl px-2 py-1'}>Human Resources</a>
                </div>
                <h3 className={'my-4 text-2xl h-44'}>
                    <a href="" className="text-white font-medium max-w-xs inline-block hover:underline">
                        {widData.title}
                    </a>
                </h3>
                <div className="p-user">
                    <div className="p-avatar w-9 float-left">
                        <img className={'rounded-full w-full'} src="/images/avatar.jpeg" />
                    </div>
                    <div className="p-userinfo ml-12 text-sm">
                        <p className="username text-white font-medium">
                            <a href="#" className={'hover:underline'}>
                                {widData.author}
                            </a>
                        </p>
                        <p className="pubdate text-white text-xs">{widData.pubDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}