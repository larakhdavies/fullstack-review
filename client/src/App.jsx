import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mongoStuff: [],
      mysqlStuff: [],
    }
  }

  render() {
    return (
      <div>Hello world!</div>
    )
  }
}

export default App;