import React, { Component } from 'react';
import '../../cat.css';
import Cell from './sections/Cell.js';

class Gato extends Component {
  imagePlayerOne = 'https://hortalaguia.files.wordpress.com/2014/02/figuras-y-formas-circulo-3231341.png';
  imagePlayerTwo = 'https://cdn.pixabay.com/photo/2013/07/13/12/32/forbidden-159816_1280.png';
  
  state = { player: 'Jugador #1', image: this.imagePlayerOne, };

  rows = {
    rowOne: [
      {
        id: 'column-one',
        coordinate: '0,0',
        source: '',
      },
      {
        id: 'column-two',
        coordinate: '0,1',
        source: '',
      },
      {
        id: 'column-three',
        coordinate: '0,2',
        source: '',
      }
    ],
    rowTwo: [
      {
        id: 'column-four',
        coordinate: '1,0',
        source: '',
      },
      {
        id: 'column-five',
        coordinate: '1,1',
        source: '',
      },
      {
        id: 'column-six',
        coordinate: '1,2',
        source: '',
      }
    ],
    rowThree: [
      {
        id: 'column-seven',
        coordinate: '2,0',
        source: '',
      },
      {
        id: 'column-eight',
        coordinate: '2,1',
        source: '',
      },
      {
        id: 'column-nine',
        coordinate: '2,2',
        source: '',
      }
    ],
  };

  _handlePlayer = (e) => {
    let changePlayer;
    let column = e.target.id.split(',');
    if (column[0] === '0') {
      column = this.rows.rowOne;
    }
    else if (column[0] === '1') {
      column = this.rows.rowTwo;
    }
    else if (column[0] === '2') {
      column = this.rows.rowThree;
    }
    for (let i = 0; i < column.length; i++) {
      if (e.target.id === column[i]['coordinate'] && column[i]['source'] === '') {
        column[i]['source'] = this.state.image;
        changePlayer = true;
      }
    }
    if (changePlayer === true) {
      if (this.state.player === 'Jugador #1') {
        this.setState({ player: 'Jugador #2', image: this.imagePlayerTwo, });
      }
      else {
        this.setState({ player: 'Jugador #1', image: this.imagePlayerOne, });
      }
    }
    changePlayer = false;
  };

  render() {
    return (
      <div className='main'>
        <div className='panel-of-players'>
          <div>
            <label>Turno del:</label>
            <p title={this.state.player}>{this.state.player}</p>
          </div>
          </div>
        <div className='main-cat'>
          <div className='cat'>
            <div className='row' id='row-one'>
              {
                this.rows.rowOne.map((item) => {
                  return (
                    <Cell key={item.id} {...item} handlePlayer={this._handlePlayer} img={item.source} />
                  )
                })
              }
            </div>
            <div className='row' id='row-two'>
              {
                this.rows.rowTwo.map((item) => {
                  return (
                    <Cell key={item.id} {...item} handlePlayer={this._handlePlayer} img={item.source} />
                  )
                })
              }
            </div>
            <div className='row' id='row-three'>
              {
                this.rows.rowThree.map((item) => {
                  return (
                    <Cell key={item.id} {...item} handlePlayer={this._handlePlayer} img={item.source} />
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gato;
