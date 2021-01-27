import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function NextIcon(props) {
    return(
        <FontAwesomeIcon icon={faAngleRight} className={props.iconColor + "ml-4 "} />
    )
}