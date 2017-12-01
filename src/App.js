import React, { Component } from 'react';
import CodeContainer from './components/codeContainer'
import FormContainer from './components/formContainer'
import ContrastScale from './components/contrastScale'

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

  render() {
    return (
      <div className='ph4 pv5 mw8 center w-100'>
        <div className='cf mb4 '>
          <div className='f3 fl'>CodeMirror Theme Maker</div>
        </div>
        <CodeContainer
          theme = {this.state.theme}
          switchTheme = {this.switchTheme}
          snippetIndex={this.state.snippetIndex}
          switchSnippet ={this.switchSnippet}
        />
        <div className='cf pt4'>
          <div className='w-30-l w-100 fl mb4'>
            <div className='f6 pr4-ns gray pr0 lh-title'>
              Contrast score is calculated based on Web Content Accessibility Guidelines <a 
               className='blue no-underline link'
               href='https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html'>2.0</a>.
              The recommended minimum score for text smaller than 18pt (24px) is 4.5.
            </div>
            <div className='mt3 code f6 h3 overflow-hidden'>
              <ContrastScale />
            </div>
          </div>
          <div className='w-70-l w-100 fl mb4'>
            <FormContainer 
              theme = {this.state.theme}
              bgColor = {this.state.bgColor}
              updateBgColor = {this.updateBgColor}
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
