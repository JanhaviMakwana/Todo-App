import React from 'react';
import Home from './components/Home/Home';
import { StateProvider } from './todo-context';
import './App.css';

class App extends React.Component {

    

  render() {
    return (
      <div className="App">
        <StateProvider>
          <Home />
        </StateProvider>
      </div>
    );
  }
}

export default App;
