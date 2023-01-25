import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function DescribeValueInput(props) {
    return (
     <div className="cb bg-blue">
        <div className="content">
                <input
                    className="bg-blue-input"
                    type="text"
                    onChange={props.handleDescribeValueInputChange}
                    name={props.valueId}
                    value={props.valueDescription} />
            <div className="cb-icons" onClick={() => props.handleDescribeValueEnter(props.valueId, props.valueDescription)}>
                <div className="icon-div cb"><FontAwesomeIcon icon={faCheck} size="xs" /></div>
            </div>
        </div>
    </div>    
    )
}

