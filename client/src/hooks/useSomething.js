import {useState} from 'react'

export default function useSomething(){

    const [somethings, setSomethings] = useState(0)


    const handleSomething = () => {
        setSomethings(somethings - 100)
    }

    const handleSomethingLessPetty = (number) => {
    
        if(number < -99){ 
             setSomethings(0)
        }
        else{
            setSomethings(number - 1)
        }
    }

    

    return [somethings, setSomethings, handleSomething, handleSomethingLessPetty]
}