import React, { Component } from 'react';

import SyntaxColorInputContainer from './components/syntaxColorInputContainer.js'
import ColorInput from './components/colorInput.js'
import { darkThemeSyntaxTemplate, darkThemeDerivatives } from './constants/darkThemeTemplate.js'
import { lightThemeSyntaxTemplate, lightThemeDerivatives } from './constants/lightThemeTemplate.js'
import CodeContainer from './components/codeContainer'
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
    this.setState({ bgColor: value })
  }
  switchTheme = (theme) => {
    this.setState({ theme: theme, bgColor: theme === 'light' ? '#FBFAF9' :  '#3D2C40'})
  }
  render() {
    const colorInputColumnClasses = 'w-20-l w4 dib mr4-ns mr3 mb3';
 
    return (
      <div className='ph4 pv5 mw8 center w-100'>
      <style jsx>{`
      .CodeMirror { padding: 0px; border-radius: 6px; background: ${this.state.bgColor} !important; }
      ${this.state.theme === 'light' ? lightThemeDerivatives : darkThemeDerivatives}
    `}</style>
        <div className='cf mb4 '>
         <div className='f3 fl'>CodeMirror Theme Maker</div>
        </div>
        <CodeContainer
          theme = {this.state.theme}
          switchTheme = {this.switchTheme}
          snippetIndex={this.state.snippetIndex}
          switchSnippet ={this.switchSnippet}
        />
        <div className='cf mt3 pv4'>
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
            <form className='flex flex-wrap'>
              <div className={`${colorInputColumnClasses}`}>
              <ColorInput
                value={this.state.bgColor} 
                label={'Background'}
                onChange={this.updateBgColor} />
              </div>         
              {this.state.theme === 'light' && lightThemeSyntaxTemplate.map((s, i) => 
                <div key={i}  className={`${colorInputColumnClasses}`}>
                  <SyntaxColorInputContainer 
                    label={s.lable} 
                    value={s.value} 
                    background={this.state.bgColor}
                    className={s.className} 
                  />
                </div>)}
              {this.state.theme === 'dark' && darkThemeSyntaxTemplate.map((s, i) => 
                <div key={i}  className={`${colorInputColumnClasses}`}>
                  <SyntaxColorInputContainer 
                    label={s.lable} 
                    value={s.value} 
                    background={this.state.bgColor}
                    className={s.className} 
                  />
                </div>)}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
