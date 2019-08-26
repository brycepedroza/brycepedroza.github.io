import React from 'react';
import { Container, Image, Button } from 'semantic-ui-react'


const CELL_SIZE = 20;
const WIDTH = 900;
const HEIGHT = 500;

class Cell extends React.Component {
  render() {
    const { x, y } = this.props;
    return (
      <div className="Cell" style={{
        left: `${CELL_SIZE * x + 1}px`,
        top: `${CELL_SIZE * y + 1}px`,
        width: `${CELL_SIZE - 1}px`,
        height: `${CELL_SIZE - 1}px`,
      }} />
    );
  }
}

export default class Conways extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cells: [],
      alive: false,
      interval: 50
    }
  }

  componentDidMount() {
    console.log(this.container.offsetHeight)
    this.setState({
      dimensions: {
        rows: Math.floor(this.container.offsetWidth/CELL_SIZE),
        columns: Math.floor(HEIGHT/CELL_SIZE),
      },
    },() => {this.board = this.makeBoard()});
  }


  makeBoard(random=false) {
    let board = []
    for (var x=0; x<this.state.dimensions.rows; x++){
      board[x] = []
      for (var y=0; y<this.state.dimensions.columns; y++){
        if (random) {
          board[x][y] = Math.random() >= 0.5
        }
        else {
          board[x][y] = false
        }
      }
    }
    return board
  }

  makeRandomBoard(){
    this.board = this.makeBoard(true)
    this.setState({ cells: this.makeCells(), alive: false })
  }

  clearBoard(){
    this.board = this.makeBoard()
    this.setState({
      cells: [],
      alive: false
    })
  }

  makeCells(){
    let cells = []
    for (var x=0; x<this.state.dimensions.rows; x++){
      for (var y=0; y<this.state.dimensions.columns; y++){
        if (this.board[x][y]){
          cells.push({x,y})
        }
      }
    }
    return cells
  }

  runIteration() {
    let newBoard = this.makeBoard();
    for (let x = 0; x < this.state.dimensions.rows; x++) {
      for (let y = 0; y < this.state.dimensions.columns; y++) {
        // calculate the number of neighbors
        let neighbors = this.calculateNeighbors(this.board, x, y);
        // if its already alive
        if (this.board[x][y]) {
          // keep alive with 2 or 3 neighbors
          if (neighbors === 2 || neighbors === 3) {
            newBoard[x][y] = true;
          } else {
            newBoard[x][y] = false;  //kill
          }
        }
        // if its dead and 3 neighbors bring to LIFE
        else if (!this.board[x][y] && neighbors === 3) {
            newBoard[x][y] = true;
          }
        }
      }

    this.board = newBoard;
    this.setState({ cells: this.makeCells() });

    if (this.state.alive) {
      this.timeoutHandler = window.setTimeout(() => {
        this.runIteration();
      }, this.state.interval);
    }

  }


  calculateNeighbors(board, x, y) {
    let neighbors = 0;
    // All possible directions around the point.
    const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    for (let i = 0; i < dirs.length; i++) {
      // grab coordinates of the current point
      let y1 = y + dirs[i][0];
      let x1 = x + dirs[i][1];
      // check for index out of bounrds errors first then check if its alive
      if (x1 >= 0 && x1 < this.state.dimensions.rows && y1 >= 0 && y1 < this.state.dimensions.columns && board[x1][y1]) {
          neighbors++;
      }
    }
    return neighbors;
  }


  toggleAlive(){ this.setState({alive: !this.state.alive}, () => this.runIteration()) }

  getElementOffset() {
    // grab the size of the board and its position relative to the viewport.
    const rect = this.boardRef.getBoundingClientRect();
    // grab the room element of the doc
    const doc = document.documentElement;
    // get x, y of the starting point of for rect
    console.log(doc.clientTop)
    console.log("LOC AND OFFSET FROM TOP", rect.top, window.pageYOffset)
    return {
        x: (rect.left + window.pageXOffset) - doc.clientLeft,
        y: (rect.top) - doc.clientTop,
        height: rect.height,
        width: rect.width
    };
  }

  handleClick = (event) => {
      const elemDetails = this.getElementOffset();  //location of click on page
      console.log("BOARD ORIGIN", elemDetails.x, elemDetails.y)
      console.log("LOCATION ON THE BOARD", event.clientX, event.clientY)
      const offsetX = event.clientX - elemDetails.x; // x location in board
      const offsetY = event.clientY - elemDetails.y; // y location on board

      const x = Math.floor(offsetX / CELL_SIZE);
      const y = Math.floor(offsetY / CELL_SIZE);
      // Make sure they are in the bounds and reverse
      if (x >= 0 && x <= this.state.dimensions.rows && y >= 0 && y <= this.state.dimensions.rows) {
          this.board[x][y] = !this.board[x][y];
          console.log(x,y)
      }

      this.setState({ cells: this.makeCells() });
  }



  renderContent() {
    return (
      <div>
        <h1> Conway's Game of Life </h1>
        <h4 style={{margin: 0}}> The rules are pretty simple: </h4>
        <p>
        Any live cell with fewer than two live neighbours dies, as if by underpopulation. <br/>
        Any live cell with two or three live neighbours lives on to the next generation. <br/>
        Any live cell with more than three live neighbours dies, as if by overpopulation. <br/>
        Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        </p>
        <div
          className="Board"
          style={{ minWidth: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}
          ref={(board) => { this.boardRef = board; }}
          onClick={this.handleClick}>
          {this.state.cells.map(cell => (
            <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`}/>
          ))}
        </div>
        <div className="Controls">
          <h4>Click on a cell in the grid to toggle it between alive or dead. Make your own patterns or create a random board. </h4>
          <Button onClick={this.toggleAlive.bind(this)}> {this.state.alive? "Stop": "Start"} </Button>
          <Button onClick={this.makeRandomBoard.bind(this)}> Make a random board </Button>
          <Button onClick={this.clearBoard.bind(this)}> Clear Board </Button>
          <h3> A blog post on this project is coming soon! </h3>

        </div>
      </div>
    );
  }

  render() {
    const { dimensions } = this.state;
    return (
      <div className="bounce-in-div" ref={el => (this.container = el)}>
         {dimensions && this.renderContent()}
      </div>
    )
  }
}
