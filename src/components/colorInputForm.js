import React from 'react'
import PropTypes from 'prop-types'
import ContrastScale from '../static/contrastScale'
import ColorInput from './colorInput.js'
import ContrastWidget from './contrastWidget.js'
import { generateDerivativeRules } from '../utils/generateDerivativeRules.js'

const colorInputColumnClasses = 'w-20-l w4 dib mr4-ns mr3 mb3'
const ColorInputForm = ({ bgColor, updateBgColor, updateSyntaxColor, themeTemplate }) => (
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
      <form className='flex flex-wrap'>
       <style jsx>{`
          .CodeMirror { padding: 0px; border-radius: 6px; background: ${bgColor} !important; }
          ${generateDerivativeRules(themeTemplate.themeDerivatives)}
        `}</style>
          <div className={`${colorInputColumnClasses}`}>
          <ColorInput
            value={bgColor} 
            label={'Background'}
            onChange={updateBgColor} />
          </div>         
          {themeTemplate.themeSyntax.map((s, i) => 
            <div key={i}  className={`${colorInputColumnClasses}`}>
              <style jsx>{`
                .${s.className.length > 1 ? s.className.join(', .') : s.className[0]} {
                  color: ${s.value} !important;
                }
              `}</style>
              <ColorInput
                value={s.value} 
                label={s.label}
                onChange={updateSyntaxColor} />
               <ContrastWidget
                foreground={s.value}
                background={bgColor}
                />
            </div>)}

      </form>
    </div>
  </div>

)


ColorInputForm.propTypes = {
  updateSyntaxColor: PropTypes.func,
  updateBgColor: PropTypes.func,
  bgColor: PropTypes.string,
  themeTemplate: PropTypes.object.isRequired

}

export default ColorInputForm