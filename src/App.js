import React, {Component} from 'react';
import './App.css';
import Clock from './components/Clock';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadLine: ''
    }
  }

changeDeadLine() {
//  console.log('state', this.state);
this.setState({deadline: this.state.newDeadLine})

}

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}/>
        <div>
          {/* console logging for test
           <input 
            placeholder='new date'
            onChange={e => console.log('event', e.target.value)}/> */}
          <input 
            placeholder='new date'
            onChange={e => this.setState({newDeadLine: e.target.value})}/>
          <button onClick={() => this.changeDeadLine()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
