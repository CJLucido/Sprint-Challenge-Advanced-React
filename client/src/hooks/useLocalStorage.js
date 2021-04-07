import {useState} from 'react'

export default function useLocalStorage(key){
    const [storedValue, setStoredValue] = useState(()=>{


            const item = window.localStorage.getItem(key);
            return item ? item : false;

        
    });

    function setValue(value){

        window.localStorage.setItem(key, value);
        setStoredValue(value)
    }

    return [storedValue, setValue]
    
}