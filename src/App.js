import React, {Component} from 'react';
import './App.css';
import Clock from './components/Clock';
import { Form, FormControl, Button } from 'react-bootstrap'; 

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
        
        <Form inline>
          {/* console logging for test
           <input 
            placeholder='new date'
            onChange={e => console.log('event', e.target.value)}/> */}
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={e => this.setState({newDeadLine: e.target.value})} 
            />
          <Button onClick={() => this.changeDeadLine()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
