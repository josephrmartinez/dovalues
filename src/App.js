import './App.css';
import { useEffect, useState } from 'react';
import Value from './components/Value';
import AddValue from './components/AddValue';
import { doValuesData } from './doValuesData';
import { nanoid } from 'nanoid';
import SelectValue from './components/SelectValue';


function App() {
  const [doValues, setDoValues] = useState(doValuesData)
  const [selectValue, setSelectValue] = useState(false)


  

  function handleExpandContent(id) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === id ? { ...each, valueExpanded: !each.valueExpanded } : each
    })
    )
  }

  

  function handleDeleteDo(valueName, doText) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.name === valueName ? { ...each, doList: each.doList.filter(doItem => doItem.text !== doText) } : each
    })
    )
  }

  function handleDeleteValue(id) {
    setDoValues(prevDoValues => prevDoValues.filter(each => each.id !== id)
    )
  }

  function handleAddDoButtonClick(valueId) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === valueId ? { ...each, addDoInputActive: !each.addDoInputActive, describeValueInputActive: false } : each
    })
    )
  }

  

  function handleDescribeValueButtonClick(valueId) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === valueId ? { ...each, describeValueInputActive: !each.describeValueInputActive, addDoInputActive: false } : each
    })
    )
  }

  function handleDescribeValueEnter(valueId, inputText) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === valueId ? { ...each, describeValueInputActive: !each.describeValueInputActive, valueDescribed: true } : each
    })
    )
  }

  function handleDescribeValueInputChange(event) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === event.target.name ? { ...each, valueDescription: event.target.value } : each
    })
    )
  }


  function handleEditDoToggle(valueId, doId) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === valueId ? {
        ...each, doList: each.doList.map(
          doItem => {
            return doItem.id === doId ? {
              ...doItem, doTextActive: !doItem.doTextActive
            } : doItem
          }
        )
      } : each
    })
    )
  }
    

  function handleEditDoInputChange(event) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === event.target.dataset.valueid ? {
        ...each, doList: each.doList.map(
          doItem => {
            return doItem.id === event.target.dataset.doid ? {
              ...doItem, text: event.target.value
            } : doItem
          }
        )
      } : each
    })
    )
    
  }



  function handleAddDoEnter(valueId) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === valueId ? { ...each, doAdded: true, doList: [...each.doList, { text: each.doAdding, doTextActive: false, id: nanoid() }] } : each
    })
    )
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === valueId ? { ...each, doAdding: "", addDoInputActive: false } : each
    })
    )
  }

  function handleAddDoInputChange(event) {
    setDoValues(prevDoValues => prevDoValues.map(each => {
      return each.id === event.target.name ? { ...each, doAdding: event.target.value } : each
    })
    )
  }

  function handleAddValueClick() {
    setSelectValue(true)
  }

  function handleSelectValueInputCreate(value) {
    setDoValues(prevDoValues => {
      return [...prevDoValues, generateNewValueBox(value)]
    })
    setSelectValue(false)
  }

  function handleSelectValueInputChange(selectedOption) {
    setDoValues(prevDoValues => {
      return [...prevDoValues, generateNewValueBox(selectedOption.value)]
    })
    setSelectValue(false)
  }

  function generateNewValueBox(value) {
    return (
      {
        name: value,
        valueExpanded: false,
        valueDescribed: false,
        valueDescription: "",
        describeValueInputActive: false,
        addDoInputActive: false,
        doAdded: true,
        doAdding: "",
        doList: [],
        id: nanoid()
      }
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
    handleAddDoInputChange={handleAddDoInputChange}
    handleEditDoToggle={handleEditDoToggle}
    handleEditDoInputChange={handleEditDoInputChange}
    handleDescribeValueButtonClick={() => handleDescribeValueButtonClick(each.id)}
    handleDescribeValueEnter={handleDescribeValueEnter}
    handleDescribeValueInputChange={handleDescribeValueInputChange}
    id={each.id}
    key={each.id}
    doAdding={each.doAdding}
  />
  )


  return (
    <>
      {selectValue && <SelectValue
        handleSelectValueInputChange={handleSelectValueInputChange}
        handleSelectValueInputCreate={handleSelectValueInputCreate}
      />}
{
  !selectValue &&
  <main>
    <div className='title'>doValues</div>
    <div className='container'>
      {valueElements}
      <AddValue handleAddValueClick={handleAddValueClick} />
    </div>
  </main>
  }
  </>
  );
}

export default App;


