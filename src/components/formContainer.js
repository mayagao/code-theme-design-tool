import React from 'react'
import SyntaxColorInputContainer from './syntaxColorInputContainer.js'
import ColorInput from './colorInput.js'
import { darkThemeSyntaxTemplate, darkThemeDerivatives } from '../constants/darkThemeTemplate.js'
import { lightThemeSyntaxTemplate, lightThemeDerivatives } from '../constants/lightThemeTemplate.js'

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.bgColor
    }
  }
  updateBgColor = (value) => {
    this.setState({ value });
    this.props.updateBgColor(value);
  }
  render() {
    const colorInputColumnClasses = 'w-20-l w4 dib mr4-ns mr3 mb3';
    const {
      theme,
      bgColor
    } = this.props;
    return (
       <form className='flex flex-wrap'>
         <style jsx>{`
          .CodeMirror { padding: 0px; border-radius: 6px; background: ${bgColor} !important; }
          ${theme === 'light' ? lightThemeDerivatives : darkThemeDerivatives}
        `}</style>
          <div className={`${colorInputColumnClasses}`}>
          <ColorInput
            value={this.state.value} 
            label={'Background'}
            onChange={this.updateBgColor} />
          </div>         
          {theme === 'light' && lightThemeSyntaxTemplate.map((s, i) => 
            <div key={i}  className={`${colorInputColumnClasses}`}>
              <SyntaxColorInputContainer 
                label={s.lable} 
                value={s.value} 
                background={bgColor}
                className={s.className} 
              />
            </div>)}
          {theme === 'dark' && darkThemeSyntaxTemplate.map((s, i) => 
            <div key={i}  className={`${colorInputColumnClasses}`}>
              <SyntaxColorInputContainer 
                label={s.lable} 
                value={s.value} 
                background={bgColor}
                className={s.className} 
              />
            </div>)}
        </form>
    )
  }
}

export default FormContainer;