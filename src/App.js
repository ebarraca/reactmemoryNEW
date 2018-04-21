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
    componentDidMount(){
    this.setState({friends: this.shuffle(this.state.friends)})
}
    shuffle = friends =>{
        console.log("shuffle")
    let i = friends.length - 1;
     while (i > 0) {
     const j = Math.floor(Math.random() * (i + 1));
     const temp = friends[i];
     friends[i] = friends[j];
     friends[j] = temp;
     i--;
   }
   return friends;
    }
    handleItemClick =id => {
        console.log("handle click")
        let userGuess = false;
        const newData = this.state.friends.map(friend => {
        const newFriend = {...friend};
        if (newFriend.id === id){
            console.log("id matched")
        if (! newFriend.clicked){
            newFriend.clicked = true;
            userGuess = true;

        }
        }
        return newFriend;

    })
        console.log("done mapping")
        console.log(userGuess)
        userGuess ? this.correctGuess (newData)
        : this.incorrectGuess (newData)
    };
        correctGuess = newData => {
            const {topCount, count} = this.state;
            const newScore = count+1;
            const newTopScore = newScore > topCount ? newScore: topCount;
            console.log("correct")
            this.setState ({
            friends: this.shuffle(newData),
            count: newScore,
            topCount: newTopScore
        });
        }

        incorrectGuess = friends => {
            console.log("incorrect")
            this.setState ({
            friends: this.resetGame(friends),
            count: 0
        });
        }

        resetGame = friends => {
            console.log("reset")
        const resetGame = friends.map(friend=>({...friend, clicked: false}))
        return this.shuffle(resetGame);

        }

  render() {
    return (
      <div>
      <NavBar
      count={this.state.count}
      topCount={this.state.topCount}
      />
       <JumboTron>
       <h1>Bobs Burgers Clicky Game</h1>
       <h2>Click an image to earn points, but dont click the same image twice!</h2>
          </JumboTron>

        <Wrapper>
        {this.state.friends.map((friend) => (

      <BurgerCard
        id={friend.id}
        key={friend.id}
        image={friend.image}
        handleClick={this.handleItemClick}
      />
    ))}

        </Wrapper>
      </div>
    );
  }
}

export default App;
