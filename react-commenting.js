// ASSESSMENT 4: REACT ASSESSMENT
// As a developer, you are tasked with commenting this code.
// There are 13 sections that need comments.
// Each section is marked with // Here: for JavaScript code and {/* Here: */} for JSX code.
// Comments will describe the code on the line below the comment marks.

import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        {/* 1) Here: Calls on the class Board to be displayed */}
        <Board />
      </div>
    )
  }
}

class Board extends Component{
  constructor(){
    super()
    // 2) Here: the state of gameBoard , currentPLayer, and winner is being definied
    this.state = {
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
    }
  }

  gamePlay = (index) => {
    // 3) Here: this.state is being destructured
    const { gameBoard, currentPlayer, winner, clickCount } = this.state
    // 4) Here:
    if(gameBoard[index] === null && winner === null){
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
        clickCount: clickCount+1
      })
    }
    if(winner === null){
      // 5) Here: winning displayes the this.state of the key winning
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        // 6) Here: the state of winner is definied as currentPlayer
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  render(){
    const { gameBoard, currentPlayer, winner } = this.state
    // 7) Here: Here the gameBoard is being mapped over to display the value at a certain index
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          {/* 8) Here: gamePlay is the name that will be called in class Square to display this.gamePlay*/}
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>

          <div className="statusDiv">
            {/* 9) Here:  what will be displayed is "the current player is: " and will show which player is current after "is:" */}
            The Current Player is: { currentPlayer }
          </div>

          <div className="statusDiv">
            {/* 10) Here: "The winner is: " and will display the winner  */}
            The Winner is: { winner }
          </div>

          <div id="outcomeBoard">
            {/* 11) Here: will show the mapped over gameBoard */}
            { mappedGameBoard }
          </div>

      </div>
    )
  }
}

class Square extends Component{

  handleSquareClick = () => {
    // 12) Here: you are callling on gamePlay form the parent class to handle onClick when pressing on the square class
    this.props.gamePlay(this.props.index)
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        {/* 13) Here: this displays the current player who clicked*/}
        { this.props.value }
      </div>
    )
  }
}

export default App
