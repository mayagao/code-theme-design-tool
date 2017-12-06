import React, { Component } from 'react';
import CodePreviewContainer from './containers/codePreviewContainer'
import ColorInputFormContainer from './containers/colorInputFormContainer'
import ThemeNameContainer from './containers/themeNameContainer'


class App extends Component {
  exportCss = () => {

  }
  render() {
    return (
      <div className='ph4 pv5 mw8 center w-100'>
        <div className='cf mb4 w5'>
          <ThemeNameContainer />
        </div>
        <CodePreviewContainer />
        <ColorInputFormContainer  />
        <div>
          <a className = 'pointer link blue ' onClick={this.exportCss}> Export CSS </a>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App
