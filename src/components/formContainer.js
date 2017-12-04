import React from 'react'
import SyntaxColorInputContainer from './syntaxColorInputContainer.js'
import ColorInput from './colorInput.js'
import _darkThemeTemplate from '../api/darkThemeTemplate.json'
import _lightThemeTemplate from '../api/lightThemeTemplate.json'

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
  generateDerivativeRules(rules) {
    return rules.reduce(
      (s, c) => 
        s + '.' + c.className + ' { ' +
        c.properties.reduce((rules, p) => rules + p.property + ": " + p.value + " !important; ", '')
        + '}\n'
      , '')
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
          ${theme === 'light' ? this.generateDerivativeRules(_lightThemeTemplate.lightThemeDerivatives)
           : this.generateDerivativeRules(_darkThemeTemplate.darkThemeDerivatives)}
        `}</style>
          <div className={`${colorInputColumnClasses}`}>
          <ColorInput
            value={this.state.value} 
            label={'Background'}
            onChange={this.updateBgColor} />
          </div>         
          {theme === 'light' && _lightThemeTemplate.lightThemeSyntax.map((s, i) => 
            <div key={i}  className={`${colorInputColumnClasses}`}>
              <SyntaxColorInputContainer 
                label={s.lable} 
                value={s.value} 
                background={bgColor}
                className={s.className} 
              />
            </div>)}
          {theme === 'dark' && _darkThemeTemplate.darkThemeSyntax.map((s, i) => 
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