import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons"

export default function Do(props) {
    return (
        <div className="cb bg-white">
            <div className="content">
                <span className="do-text">{props.doText}</span>
                <div className="cb-icons">
                    <div className="icon-div cb"><FontAwesomeIcon icon={faPen} size="xs" /></div>
                    <div className="icon-div cb"><FontAwesomeIcon icon={faCheck} size="xs" /></div>
                </div>
            </div>
        </div>
    )
}