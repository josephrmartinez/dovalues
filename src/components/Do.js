import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"


export default function Do(props) {
    return (
        <>
            {!props.doTextActive && <div className="cb bg-white">
                <div className="content">
                    <span className="do-text">{props.doText}</span>
                    <div className="cb-icons">
                        <div className="icon-div cb" onClick={() => props.handleEditDoToggle(props.valueId, props.doId)}><FontAwesomeIcon icon={faPen} size="xs" /></div>
                        <div className="icon-div cb" onClick={props.handleDeleteDo}><FontAwesomeIcon icon={faXmark} size="xs" /></div>
                    </div>
                </div>
            </div>}
            {props.doTextActive && <div className="cb bg-blue">
                <div className="content">
                    <input className="bg-blue-input"
                        type="text"
                        value={props.doText}
                        onChange={props.handleEditDoInputChange}
                        name={props.doId}
                        data-doid={props.doId}
                        data-valueid={props.valueId}
                        onKeyDown={function (e) { if (e.key === 'Enter') { props.handleEditDoToggle(props.valueId, props.doId) } }}
                        autoFocus
                         />
                    <div className="cb-icons">
                        <div className="icon-div cb" onClick={() => props.handleEditDoToggle(props.valueId, props.doId)}><FontAwesomeIcon icon={faCheck} size="xs" /></div>
                    </div>
                </div>
            </div>}
    </>        
    )
}