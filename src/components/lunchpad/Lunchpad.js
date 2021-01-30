export default function Lunchpad({ company }) {
    return (
        <div className="lunchpad h-100px relative border border-solid border-gray-300 rounded-md">
            <a href={company.companyURL}>
                <img src={company.companyLogo} className={'company-logo max-w-3/4 max-h-55% absolute left-0 right-0 bottom-0 -top-4 m-auto'} alt={company.companyName} />
                <span className="company-name absolute left-0 right-0 bottom-0 text-center bg-gray-200 border-t border-gray-300 font-medium text-gray-800">{company.companyName}</span>
            </a>
        </div>
    )
}