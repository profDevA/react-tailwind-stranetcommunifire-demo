import { FaCommentAlt, FaThumbsUp } from "react-icons/fa";
import { HoverContainer } from './style';

export default function ({ article }) {
    return (
        <HoverContainer>
            <div className="article bg-gray-100 py-3 relative overflow-hidden cursor-default">
                <div className="article-header">
                    <h3 className="category mb-3 text-2xl text-gray-800 font-medium px-4 cursor-pointer">
                        <a href="#category" className="hover:underline">
                            {article.category}
                        </a>
                    </h3>
                </div>

                <div className="article-body h-48 bg-center bg-cover px-4 pt-4" style={{ backgroundImage: `url(${article.featuredImage})` }}>
                    <a href="#article" className="cursor-pointer">
                        <div>
                            <h2 className="text-white text-xl h-20">{article.title}</h2>
                            <p className="text-white leading-tight">{article.info}</p>
                        </div>
                    </a>
                </div>
                <p className="px-4 py-4 text-gray-500">by
                <a href="#author" className="cursor-pointer text-cyan-600 ml-4 hover:underline">{article.author}</a>
                </p>
                <div className="article-footer px-4 relative">
                    <p className="py-2 border-t border-gray-500">{article.pubDate}</p>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex">
                        <span className="px-2 mr-2 border border-cyan-500 flex justify-center items-center">
                            <FaCommentAlt className="text-cyan-600 mr-2" />
                            {article.commentCounts}
                        </span>
                        <span className="px-2 flex justify-center items-center bg-cyan-600 text-white">
                            <FaThumbsUp className="mr-2" />
                            {article.voteCounts}
                        </span>
                    </div>
                </div>
            </div>
        </HoverContainer>
    )
}