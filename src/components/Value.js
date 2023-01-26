
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import DescribeValue from "./DescribeValue"
import Do from "./Do"
import ValueDescribed from "./ValueDescribed"
import DescribeValueInput from "./DescribeValueInput"
import AddDoInput from "./AddDoInput"
import AddDoButton from "./AddDoButton"
import { nanoid } from "nanoid"



export default function Value(props) {
    
    const doElements = props.doList.map(each => <Do
        doText={each.text}
        doTextActive={each.doTextActive}
        handleDeleteDo={() => props.handleDeleteDo(props.name, each.text)}
        handleEditDoToggle={props.handleEditDoToggle}
        handleEditDoInputChange={props.handleEditDoInputChange}
        parentValue={props.name}
        valueId={props.id}
        doId={each.id}
        key={nanoid()} />)

    return (
        <>
        <div className="value-box">
            <div className="value-box-content">
                <span className="value-box-text">{props.name}</span>
                <div className="value-box-icons">
                    <div className="icon-div value-box" onClick={props.handleDeleteValue}><FontAwesomeIcon icon={faXmark} size="xs"/></div>
                    <div className="icon-div value-box" onClick={props.handleExpandContent}><FontAwesomeIcon icon={props.valueExpanded ? faAngleUp : faAngleDown} size="xs"/></div>
                </div>
            </div>
        </div>
            {props.valueExpanded && <div className="child-boxes">
                
                {props.valueDescribed && !props.describeValueInputActive && <ValueDescribed handleDescribeValueButtonClick={props.handleDescribeValueButtonClick} valueDescription={props.valueDescription} />}

                {!props.valueDescribed && !props.describeValueInputActive && <DescribeValue handleDescribeValueButtonClick={props.handleDescribeValueButtonClick} />}
                {props.describeValueInputActive && <DescribeValueInput valueDescription={props.valueDescription} valueId={props.id} handleDescribeValueEnter={props.handleDescribeValueEnter} handleDescribeValueInputChange={props.handleDescribeValueInputChange} />} 
                

                {props.doAdded && doElements}
                {props.addDoInputActive && <AddDoInput valueId={props.id} doAdding={props.doAdding} handleAddDoInputChange={props.handleAddDoInputChange} handleAddDoEnter={props.handleAddDoEnter} />}
                {!props.addDoInputActive && <AddDoButton handleAddDoButtonClick={props.handleAddDoButtonClick} />}
            </div>}
        </>
        )
}
