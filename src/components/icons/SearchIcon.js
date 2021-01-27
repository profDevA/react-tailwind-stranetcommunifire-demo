import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { PreviousMap } from "postcss";

export default function SearchIcon(props) {
    return(
        <FontAwesomeIcon icon={faSearch} className={props.iconColor} />
    )
}