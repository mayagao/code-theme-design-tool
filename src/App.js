import React, { Component } from 'react';
import CodeContainer from './containers/codeContainer'
import ColorInputFormContainer from './containers/colorInputFormContainer'
import ThemeNameContainer from './containers/themeNameContainer'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      bgColor: '#FBFAF9',
      theme: 'light'
    };
  }
  updateBgColor = (value) => {
    this.setState({ bgColor: value });
  }
  switchTheme = (theme) => {
    this.setState({ theme: theme, bgColor: theme === 'light' ? '#FBFAF9' :  '#3D2C40'})
  }
  exportCss = () => {

  }
  render() {
    return (
      <div className='ph4 pv5 mw8 center w-100'>
        <div className='cf mb4 w5'>
          <ThemeNameContainer />
        </div>
        <CodeContainer
          theme = {this.state.theme}
          switchTheme = {this.switchTheme}
          snippetIndex={this.state.snippetIndex}
          switchSnippet ={this.switchSnippet}
        />
        <ColorInputFormContainer 
          theme = {this.state.theme}
          bgColor = {this.state.bgColor}
          updateBgColor = {this.updateBgColor}
        />
        <div>
          <a className = 'pointer link blue ' onClick={this.exportCss}> Export CSS </a>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App
