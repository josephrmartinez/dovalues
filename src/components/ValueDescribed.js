import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen } from "@fortawesome/free-solid-svg-icons"

export default function ValueDescribed(props) {
    return (
     <div className="cb bg-white">
        <div className="content">
            <span className="value-description">{props.valueDescription}</span>
            <div className="cb-icons" onClick={props.handleDescribeValueButtonClick}>
                <div className="icon-div-cb"><FontAwesomeIcon icon={faPen} size="xs" /></div>
            </div>
        </div>
    </div>   
    )
}