

export default function BannerButton(props) {
    return (
        <div className={'mb-2 last:mb-0 md:w-60 mx-2 md:mb-0'}>
            <button className="text-white py-3 bg-black bg-opacity-30 px-4 rounded w-full text-xl">{props.buttonTitle}</button>
        </div>
    )
}