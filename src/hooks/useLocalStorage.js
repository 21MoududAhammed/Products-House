import { useEffect, useState } from "react";

export default function useLocalStorage(storageKey, defaultValue){
  const [storedValue, setStoredValue] = useState(()=>{
    const data = JSON.parse(localStorage.getItem(storageKey));
    return data ? data : defaultValue;
  })

  useEffect(()=>{
    localStorage.setItem(storageKey, JSON.stringify(storedValue))
  },[storedValue,storageKey])

  const addToLocalStorage = data =>{
    setStoredValue([...storedValue, data])
  }

  const removeFromLocalStorage = data =>{
    const remainingValue = storedValue.filter(item => item !== data);
    setStoredValue(remainingValue);
  }

  return {storedValue, addToLocalStorage, removeFromLocalStorage}
}