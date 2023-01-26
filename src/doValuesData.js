import { nanoid } from "nanoid"

export let doValuesData = [
{
  name: "connection",
  valueExpanded: true,
  valueDescribed: true,
  valueDescription: "spend quality time with loved ones. talk about what matters",
  describeValueInputActive: false,
    addDoInputActive: false,
    doAdded: true,
  doAdding: "",
    doList: [{ text: "have dinner with tim", doTextActive: false, id: 345 }],
    id: nanoid()
  
},
{
  name: "health",
  valueExpanded: false,
  valueDescribed: false,
  valueDescription: "",
  describeValueInputActive: false,
  addDoInputActive: false,
  doAdded: false, 
  doAdding: "",
    doList: [],
  id: nanoid()
  },
{
  name: "creativity",
  valueExpanded: false,
  valueDescribed: false,
  valueDescription: "",
  describeValueInputActive: false,
  addDoInputActive: false,
  doAdded: true, 
  doAdding: "",
    doList: [{ text: "have", doTextActive: false, id: 123 }, { text: "dinner", doTextActive: false, id: 234 }],
  id: nanoid()
}
]