import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function DescribeValueInput(props) {
    function handleEnterKey(e) {
        if (e.key === 'Enter') {
            if (e.target.value === "") {
                props.handleDescribeValueButtonClick()
            } else {
                props.handleDescribeValueEnter(props.valueId, props.valueDescription)
            }
        }
    }

    function handleSubmitButtonClick() {
        if (props.valueDescription === "") {
            props.handleDescribeValueButtonClick()
        } else {
            props.handleDescribeValueEnter(props.valueId, props.valueDescription)
        }
    }


    return (
     <div className="cb bg-blue">
        <div className="content">
                <input
                    className="bg-blue-input"
                    type="text"
                    autoCapitalize="none"
                    onChange={props.handleDescribeValueInputChange}
                    name={props.valueId}
                    value={props.valueDescription}
                    onKeyDown={handleEnterKey}
                autoFocus/>
            <div className="cb-icons" onClick={handleSubmitButtonClick}>
                <div className="icon-div-cb"><FontAwesomeIcon icon={faCheck} size="xs" /></div>
            </div>
        </div>
    </div>    
    )
}

