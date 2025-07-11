import { useState } from "react";

export function useInput(defaultValue ,validationFn) {
  const [enteredValue, setEnterdValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsvalid = validationFn(enteredValue);

  function handleInputChange(identifier, event) {
    setEnterdValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur(identifier) {
    setDidEdit(true);
  }
  return{
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError :didEdit && !valueIsvalid
  }
}
