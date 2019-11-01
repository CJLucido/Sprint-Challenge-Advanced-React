import {useState} from 'react'

export default function useSomething(){

    const [somethings, setSomethings] = useState(0)


    const handleSomething = () => {
        setSomethings(somethings - 100)
    }

    const handleSomethingLessPetty = (number) => {
     console.log(number)
        if(number > 100){
           
            return setSomethings(number === 0)
        }
        else{
            return setSomethings(number - 1)
        }
    }

    

    return [somethings, setSomethings, handleSomething, handleSomethingLessPetty]
}