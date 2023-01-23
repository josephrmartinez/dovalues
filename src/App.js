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
        valueDescription: "jesus, guns, babies.",
        doAdded: true, 
        doList: ["praise His glory"],
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


  const valueElements = doValues.map(each => <Value
    name={each.name}
    valueExpanded={each.valueExpanded}
    valueDescribed={each.valueDescribed}
    valueDescription={each.valueDescription}
    doAdded={each.doAdded}
    doList={each.doList}
    handleExpandContent={()=>handleExpandContent(each.id)}
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


