import SearchIcon from "../components/icons/SearchIcon";
import BannerButton from "./BannerButton";

export default function Banner() {
    return (
        <div className="banner bg-gradient-to-br from-blue-700 via-blue-500 to-yellow-200 px-4 py-8 md:py-16">
            <div className="px-4 pt-10">
                <h3 className="text-center text-white text-3xl font-medium mb-4">Welcome to new Intranet!!</h3>
                <div className="search-textbox relative max-w-4xl md:mx-auto block">
                    <input type="text" name="" className="py-3 pl-4 pr-6 bg-white rounded-full w-full outline-none" placeholder="Search people, places and contents..." />
                    <a href="#" className="search-btn absolute top-3.5 right-3">
                        <SearchIcon iconColor="text-black" />
                    </a>
                </div>
                <div className="quick-navigation pt-6 mb-4">
                    <h4 className="font-medium text-center text-white mb-3 ">Quick Navigation</h4>
                    <div className="baner-buttons md:flex md:justify-center md:items-center md:mb-8">
                        <BannerButton buttonTitle={'Employee Handbook'} />
                        <BannerButton buttonTitle={'Discussions'} />
                        <BannerButton buttonTitle={'Training Videos'} />
                    </div>
                </div>
                <div className="banner-footer-link md:flex md:justify-center md:items-center">
                    <a href="#" className="text-white text-center inline-block mx-12 text-xl">Have a question that we can help you with?</a>
                </div>
            </div>
        </div>
    )
}