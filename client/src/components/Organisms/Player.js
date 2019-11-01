import React from 'react'

export default  function Player({ playerName,
    playerCountry,
    playerSearches}){


    return (
            <div data-testid="player-container">
                <p >Name: {playerName}</p>
                <p >Country: {playerCountry}</p>
                <p >Searches: {playerSearches}</p>

            
            </div>
    )
}



// <p data-testid="player-name">Name: {playerName}</p>
// <p data-testid="player-country">Country: {playerCountry}</p>
// <p data-testid="player-searches">Searches: {playerSearches}</p>