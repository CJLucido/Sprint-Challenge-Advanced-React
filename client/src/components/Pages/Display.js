import React from "react";
import axios from 'axios'

import Player from '../Organisms/Player'


class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: []
    };
  }

  componentDidMount() {
    
    //this.setState({ pokemon: data }); // pretend this is fetching from an API
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      this.setState({playerData: response.data})
    })
    .catch(error => {
      console.log(error);
    });
  }


  render() {
    

    return (
      <div data-testid="display-container">
      {
          this.state.playerData.map(item => 
            <Player
             key={item.id}
             playerId={item.id}
             playerName={item.name}
             playerCountry={item.country}
             playerSearches={item.searches}
            
             />
            
            )
      }
            
      </div>
    );
  }
}

export default Display;
//<Player playerData={playerData}/>