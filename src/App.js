
// Necessary imports.
import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import cards from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.cards to the cards json array
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  // Function to restart the game if card was clicked more then once.
  restart = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  // Function for logic if card was clicked once randomly sort all cards
  clickCounter = id => {
    this.state.cards.find((j, i) => {
      if (j.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.restart();
        }
      }
    });
  }
  
  // Renders the Wrapper with Header/Card/Footer.
  render() {
    return (
      <Wrapper>
        <Header 
        score={this.state.score} highscore={this.state.highscore}>Memory clicking game
          </Header><br></br>
        {this.state.cards.map(card => (
          <Card
            clickCounter={this.clickCounter}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
        <Footer />
      </Wrapper>
      
    );
  }
}

export default App;