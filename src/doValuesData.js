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
  doList: ["have dinner with tim"],
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
    doList: ["aaa", "bbb", "ccc"],
  id: nanoid()
}
]