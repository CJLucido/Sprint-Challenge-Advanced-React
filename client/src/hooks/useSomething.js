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
        else if(number === 99){
            setSomethings(number + 1)
        } else if (number > 99) {
            setSomethings(number - 1)
        } else{
            setSomethings(99)
        }
    }

    

    return [somethings, setSomethings, handleSomething, handleSomethingLessPetty]
}