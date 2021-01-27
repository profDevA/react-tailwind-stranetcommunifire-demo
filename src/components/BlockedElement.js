export default function BlockedElement(props) {
    return(
        <div className="mb-4">
            <h2 className="text-center text-2xl mb-1">{props.blockedTitle}</h2>
            <table className="min-w-full divide-y divide-gray-200 border text-center">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>content</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>https:///</td>
                        <td>dfdf</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>https:///</td>
                        <td>dfdf</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>https:///</td>
                        <td>dfdf</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}