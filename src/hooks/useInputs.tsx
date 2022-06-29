import { ChangeEvent, useState } from "react"

const useInputs=(keys:Array<string>) => {
  const [inputs,setInputs]= useState(() => {
    const values={};
    keys.forEach((_,index)=>values[keys[index]]='')
    return values
  })
  const onChange=(event:ChangeEvent<HTMLInputElement>)=> {
    const {name,value}= event.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }
  return {inputs,onChange}
}
export default useInputs;