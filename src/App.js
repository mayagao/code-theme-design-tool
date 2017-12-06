import React, { Component } from 'react';
import CodePreviewContainer from './containers/codePreviewContainer'
import ColorInputFormContainer from './containers/colorInputFormContainer'
import ThemeNameContainer from './containers/themeNameContainer'


class App extends Component {
  render() {
    return (
      <div className='ph4 pv4 mw8 center w-100'>
        <div className='cf mb4 w5'>
          <ThemeNameContainer />
        </div>
        <CodePreviewContainer />
        <ColorInputFormContainer  />
      </div>
    );
  }
}

export default App
