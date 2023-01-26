import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export default function AddDoInput(props) {
    return (
     <div className="cb bg-blue">
        <div className="content">
                <input className="bg-blue-input"
                        type="text"
                        onChange={props.handleAddDoInputChange}
                        name={props.valueId}
                        value={props.doAdding}/>
            <div className="cb-icons">
                <div className="icon-div cb" onClick={() => props.handleAddDoEnter(props.valueId)}><FontAwesomeIcon icon={faCheck} size="xs" /></div>
            </div>
        </div>
    </div>    
    )
}

