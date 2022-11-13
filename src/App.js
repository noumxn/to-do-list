import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  // increment = () => {
  //   this.state({
  //     count
  //   })
  // }

  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
