import React, { Component } from 'react';
import Wrapper from "./components/Wrapper"
import NavBar from "./components/NavBar"
import JumboTron from "./components/JumboTron"
import BurgerCard from "./components/BurgerCard"
import friends from "./friends.json";

class App extends Component {
    state = {
        friends: friends,
        count: 0,
        topCount: 0
    }
  render() {
    return (
      <div>
      <NavBar />
       <JumboTron>
       <h1>Bobs Burgers Clicky Game</h1>
       <h2>Click an image to earn points, but dont click the same image twice!</h2>
          </JumboTron>

        <Wrapper>
        {this.state.friends.map((friend, i) => (
  <BurgerCard
    id={friend.id}
    key={friend.id}
    image={friend.image}
  />
))}

        </Wrapper>
      </div>
    );
  }
}

export default App;
