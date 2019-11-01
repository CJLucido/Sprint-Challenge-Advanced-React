import React from "react";



class Display extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
    console.log("Constructor is running!");
  }

  componentDidMount() {
    console.log("CDM is running");
    
    //this.setState({ pokemon: data }); // pretend this is fetching from an API
  }

  componentDidUpdate() {
    console.log("CDU is runninnnnnn");
  }

  render() {
    console.log("component is rendering!");

    return (
      <div data-testid="display-container">
        PlayerCard
      </div>
    );
  }
}

export default Display;
