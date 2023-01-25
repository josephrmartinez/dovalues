import './App.css';
import { useState } from 'react';
import Value from './components/Value';
import AddValue from './components/AddValue';
import { doValuesData } from './doValuesData';
import { nanoid } from 'nanoid';


function App() {
  const [doValues, setDoValues] = useState(doValuesData)


  function generateNewValueBox() {
    return (
      {
        name: "faith",
        valueExpanded: false,
        valueDescribed: true,
        describeValueInputActive: false,
        valueDescription: "jesus, guns, babies.",
        doAdded: true, 
        doList: ["praise His glory"],
        addDoInputActive: false,
        id: nanoid()
      }
    )
  }

  function handleExpandContent(id) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === id ? { ...each, valueExpanded: !each.valueExpanded } : each
    })
    )
  }

  function handleAddValueClick() {
    setDoValues(prevDoValues => {
      return [...prevDoValues, generateNewValueBox()]
    })
  }

  function handleDeleteDo(valueName, doText) {
    console.log(valueName)
    console.log(doText)
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.name === valueName ? { ...each, doList: each.doList.filter(doItem => doItem !== doText) } : each
    })
    )
  }

  function handleDeleteValue(id) {
    setDoValues(prevDoValues => prevDoValues.filter(each => each.id !== id)
    )
  }

  function handleAddDoButtonClick(valueId) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === valueId ? { ...each, addDoInputActive: !each.addDoInputActive, describeValueInputActive: false} : each
    })
    )
  }

  function handleDescribeValueButtonClick(valueId) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === valueId ? { ...each, describeValueInputActive: !each.describeValueInputActive, addDoInputActive: false} : each
    })
    )
  }

  function handleDescribeValueEnter(valueId) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === valueId ? { ...each, describeValueInputActive: !each.describeValueInputActive} : each
    })
    )
  }

  function handleAddDoEnter(valueId, doInputText) {
    console.log(doInputText)
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === valueId ? { ...each, addDoInputActive: !each.addDoInputActive } : each
    })
    )
  }


  const valueElements = doValues.map(each => <Value
    name={each.name}
    valueExpanded={each.valueExpanded}
    valueDescribed={each.valueDescribed}
    valueDescription={each.valueDescription}
    describeValueInputActive={each.describeValueInputActive}
    doAdded={each.doAdded}
    addDoInputActive={each.addDoInputActive}
    doList={each.doList}
    handleExpandContent={() => handleExpandContent(each.id)}
    handleDeleteValue={() => handleDeleteValue(each.id)}
    handleDeleteDo={handleDeleteDo}
    handleAddDoButtonClick={() => handleAddDoButtonClick(each.id)}
    handleAddDoEnter={() => handleAddDoEnter(each.id)}
    handleDescribeValueButtonClick={() => handleDescribeValueButtonClick(each.id)}
    handleDescribeValueEnter={() => handleDescribeValueEnter(each.id)}
    id={each.id}
    key={each.id}
  />
  )


  return (
    <main>
      <div className='title'>doValues</div>
      <div className='container'>
        {valueElements}
        <AddValue handleAddValueClick={handleAddValueClick} />
      </div>
    </main>
  );
}

export default App;


