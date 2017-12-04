import React from 'react'
import SyntaxColorInputContainer from './syntaxColorInputContainer.js'
import ColorInput from '../components/colorInput.js'
import ColorInputForm from '../components/colorInputForm.js'
import _darkThemeTemplate from '../api/darkThemeTemplate.json'
import _lightThemeTemplate from '../api/lightThemeTemplate.json'
import { generateDerivativeRules } from '../utils/generateDerivativeRules.js'

class ColorInputFormContainer extends React.Component {
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
    const {
      theme,
      bgColor
    } = this.props;
    const colorInputColumnClasses = 'w-20-l w4 dib mr4-ns mr3 mb3';
    return (
       <ColorInputForm>
         <style jsx>{`
          .CodeMirror { padding: 0px; border-radius: 6px; background: ${bgColor} !important; }
          ${theme === 'light' ? generateDerivativeRules(_lightThemeTemplate.themeDerivatives)
           : generateDerivativeRules(_darkThemeTemplate.themeDerivatives)}
        `}</style>
          <div className={`${colorInputColumnClasses}`}>
          <ColorInput
            value={this.state.value} 
            label={'Background'}
            onChange={this.updateBgColor} />
          </div>         
          {theme === 'light' && _lightThemeTemplate.themeSyntax.map((s, i) => 
            <div key={i}  className={`${colorInputColumnClasses}`}>
              <SyntaxColorInputContainer 
                label={s.lable} 
                value={s.value} 
                background={bgColor}
                className={s.className} 
              />
            </div>)}
          {theme === 'dark' && _darkThemeTemplate.themeSyntax.map((s, i) => 
            <div key={i}  className={`${colorInputColumnClasses}`}>
              <SyntaxColorInputContainer 
                label={s.lable} 
                value={s.value} 
                background={bgColor}
                className={s.className} 
              />
            </div>)}
        </ColorInputForm>
    )
  }
}

export default ColorInputFormContainer;