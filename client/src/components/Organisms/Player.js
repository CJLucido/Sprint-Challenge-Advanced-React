import React from 'react'

import useLocalStorage from "../../hooks/useLocalStorage"

export default  function Player({playerId,  playerName,
    playerCountry,
    playerSearches}){

const [, setMostImportant] = useLocalStorage("Most Important")



const favoritePlayer = () => {
        setMostImportant(playerName)

}

    return (

            <div data-testid="player-container">    
                <p >Name: {playerName}</p>
                <p >Country: {playerCountry}</p>
                <p >Searches: {playerSearches}</p>
                <button onClick={() => favoritePlayer()}>Most Important</button>
            
            </div>
    )
}



// <p data-testid="player-name">Name: {playerName}</p>
// <p data-testid="player-country">Country: {playerCountry}</p>
// <p data-testid="player-searches">Searches: {playerSearches}</p>