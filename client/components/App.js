import React from 'react';
import Header from './Header/Header';

class App extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <div className="jumbotron container">
            <h1>Family Challenge</h1>
            <p>We are currently building this awesome app</p>
            </div>
        </div>
      );
    }
  }

export default App
