
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import DescribeValue from "./DescribeValue"
import Do from "./Do"



export default function Value(props) {


    const doElements = props.doList.map(each => <Do
        doText={each}
        handleDeleteDo={() => props.handleDeleteDo(props.name, each)}
        key={each} />)

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
                {!props.valueDescribed && <DescribeValue />}
                {props.valueDescribed &&
                    <div className="cb bg-white">
                    <div className="content">
                        <span className="value-description">{props.valueDescription}</span>
                        <div className="cb-icons">
                            <div className="icon-div cb"><FontAwesomeIcon icon={faPen} size="xs" /></div>
                        </div>
                    </div>
                    </div>
                }
                {props.doAdded && doElements}
                <div className="cb bg-blue">
                    <span>ADD DO</span>
                </div>
            </div>}
    </>
    )
}

// name="connection"
//           valueExpanded={true}
//           valueDescribed={true}
//           valueDescription="spend quality time with loved ones. talk about what matters"
//           doAdded={true} 
//           doList={["have dinner with tim", "write letter to marina"]}/>