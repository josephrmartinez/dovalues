import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function DescribeValueInput(props) {
    return (
     <div className="cb bg-blue">
        <div className="content">
            <input className="bg-blue-input"></input>
            <div className="cb-icons" onClick={props.handleDescribeValueEnter}>
                <div className="icon-div cb"><FontAwesomeIcon icon={faCheck} size="xs" /></div>
            </div>
        </div>
    </div>    
    )
}

