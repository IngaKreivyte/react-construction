import React from 'react';
import Nav from './components/Nav';

// Class component
// Jei koponentas ar html el. be teksto ar vidaus
// uzrasome <div/>  ar  <Component/>
// state galimas tik class komponentuose

class App extends React.Component {
  state={
    title:'React Construction Site'
  };

  // metodas skirtas pakeisit state
  changeTitle = ()=>{
     this.setState({title:'Construction'})
  };

  render() {
    // is cia mes sugeneruojam html
    return (
      <div>
        <Nav firstTab="Home page"
             secondTab="About"
             thirdTab="Contacts"/>
        <h1 onClick={this.changeTitle}>{this.state.title}</h1>
        <p>hello world</p>
      </div>
    )
  }
}

// export component
export default App;