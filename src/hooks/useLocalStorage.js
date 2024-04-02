import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useLocalStorage(storageKey, defaultValue){
  const [storedValue, setStoredValue] = useState(()=>{
    const data = JSON.parse(localStorage.getItem(storageKey));
    return data ? data : defaultValue;
  })

  useEffect(()=>{
    localStorage.setItem(storageKey, JSON.stringify(storedValue))
  },[storedValue,storageKey])

//   add a data 
  const addToLocalStorage = id =>{
    const isItem = storedValue?.find(value => value.p_id === id);
    if(!isItem){
        setStoredValue([...storedValue, {p_id:id,quantity:1}])
    }else{
        toast(`This product already added.`)
    }
  }
// remove a data 
  const removeFromLocalStorage = data =>{
    const remainingValue = storedValue.filter(item => item !== data);
    setStoredValue(remainingValue);
  }
//   increase quantity of a data 
const increaseQuantity = (id) =>{
    const nextStoredValue = storedValue.map(value => {
        if(value.p_id === id){
            return {...value, quantity: value.quantity + 1}
        }else{
            return value;
        }
    })
    setStoredValue(nextStoredValue)
    
}

  return {storedValue, addToLocalStorage, removeFromLocalStorage, increaseQuantity}
}