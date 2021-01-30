import { Timeline } from 'react-twitter-widgets'

export default function Tweets() {
    return(
        <div>
            <Timeline dataSource={{ sourceType: "profile", screenName: "reactjs" }} options={{ height: "500" }} />
        </div>
    )
}