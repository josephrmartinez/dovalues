import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'

const valuesMasterList = ["acceptance", "achievement", "adventure", "assertiveness", "authenticity", "autonomy", "balance", "beauty", "boldness", "challenge", "community", "compassion", "competency", "connection", "contribution", "cooperation", "courage", "creativity", "curiosity", "determination", "equality", "excitement", "faith", "fairness", "fame", "fitness", "flexibility", "freedom", "friendship", "fun", "generosity", "gratitude", "growth", "happiness", "honesty", "humor", "humility", "influence", "independence", "inner harmony", "intimacy", "justice", "kindness", "knowledge", "leadership", "learning", "love", "meaningful work", "mindfulness", "order", "openness", "patience", "persistence", "pleasure", "power", "reciprocity", "reputation", "respect", "responsibility", "romance", "safety", "security", "self-awareness", "self-care", "self-development", "self-control", "sensuality", "service", "sexuality", "spirituality", "skillfulness", "supportiveness", "trust", "wealth", "wisdom"]

const options = valuesMasterList.map(each => {
 return { value: each, label: each }
})
    
export default function SelectValue(props) {
    return (
        <div className="selectValue-page">
            <div className='selectValue-container'>
                <form>
                    <CreatableSelect
                        placeholder="select value"
                        options={options}
                        name="SelectValue"
                        onChange={props.handleSelectValueInputChange}
                        onCreateOption={props.handleSelectValueInputCreate}/> 
                </form>
                
            </div>  
        </div>
    )
}