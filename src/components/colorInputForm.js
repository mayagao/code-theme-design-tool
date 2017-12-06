import React from 'react'
import PropTypes from 'prop-types'
import ContrastScale from '../static/contrastScale'
import ColorInput from './colorInput.js'
import ContrastWidget from './contrastWidget.js'
import { generateDerivativeRules } from '../utils/generateDerivativeRules.js'

const colorInputColumnClasses = 'w-20-l w4 dib mr4-ns mr3 mb3'

class ColorInputForm extends React.Component {
 generateCssRules = (bgColor, themeTemplate) => {

  return `.CodeMirror.cm-s-themeName { padding: 0px; border-radius: 6px; background: ${bgColor}; color: ${themeTemplate
   .themeSyntax[0].value}}
${generateDerivativeRules(themeTemplate.themeDerivatives)}\n${themeTemplate.themeSyntax
    .map(s => 
      `.cm-s-themeName .${s.className
        .join(', .cm-s-themeName .')} { color: ${s.value}; }\n`)
        .join('')}
`}

 onClick = (e) => {
    e.preventDefault();
    let ruleName = this.props.themeName.trim().toLowerCase().replace(/\s/g, '-')
    let rule = `<pre>` + 
      this.generateCssRules(this.props.bgColor, this.props.themeTemplate).replace(/themeName/g, ruleName)
      + `</pre>`;
    window.open("about:blank", "").document.write(rule);
  }
  
render() {
  const { bgColor, 
    updateBgColor, 
    updateSyntaxColor, 
    themeName,
    themeTemplate } = this.props
  return (
    <div className='cf pt4'>
      <style jsx>{this.generateCssRules(bgColor, themeTemplate)}</style>
        <div className='w-30-l w-100 fl mb2'>
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
        <div className='w-70-l w-100 fl mb'>
          <form className='flex flex-wrap'>
           
              <div className={`${colorInputColumnClasses}`}>
              <ColorInput
                value={bgColor} 
                label='Background'
                onChange={updateBgColor} />
              </div>         
              {themeTemplate.themeSyntax.map((s, i) => 
                <div key={i}  className={`${colorInputColumnClasses}`}>
                  <ColorInput
                    value={s.value} 
                    label={s.label}
                    onChange={updateSyntaxColor} />
                   <ContrastWidget
                    foreground={s.value}
                    background={bgColor}
                    />
                </div>)}
               <div>
            </div>
          </form>
        </div>
        {themeName !== '' && <a className = 'mb4 pointer link blue ' onClick={this.onClick}> Export CSS </a>}
      </div>
    )
  }
}

ColorInputForm.propTypes = {
  updateSyntaxColor: PropTypes.func,
  updateBgColor: PropTypes.func,
  bgColor: PropTypes.string,
  themeTemplate: PropTypes.object.isRequired

}

export default ColorInputForm