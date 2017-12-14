import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h1 className="App-title">{this.props.text}</h1>
      </div>
    )
  }
}

export default Header;
