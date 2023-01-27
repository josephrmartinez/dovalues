import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function AddDoInput(props) {
    function handleEnterKey(e) {
        if (e.key === 'Enter') {
            if (e.target.value === "") {
                props.handleAddDoButtonClick()
            } else {
                props.handleAddDoEnter(props.valueId)
            }
        }
    }

    function handleSubmitButtonClick() {
        if (props.doAdding === "") {
            props.handleAddDoButtonClick()
        } else {
            props.handleAddDoEnter(props.valueId)
        }
    }


    return (
        <div className="cb bg-blue">
            <div className="content">
                <input className="bg-blue-input"
                    type="text"
                    autoCapitalize="none"
                    onChange={props.handleAddDoInputChange}
                    name={props.valueId}
                    value={props.doAdding}
                    onKeyDown={handleEnterKey}
                    autoFocus />
                <div className="cb-icons">
                    <div className="icon-div-cb" onClick={handleSubmitButtonClick}><FontAwesomeIcon icon={faCheck} size="xs" /></div>
                </div>
            </div>
        </div>
    )
}


