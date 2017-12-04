import React from 'react'
import PropTypes from 'prop-types'
import ContrastScale from '../static/contrastScale'



const ColorInputForm = ({ children}) => (

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
       {children}     
      </form>
    </div>
  </div>

)


ColorInputForm.propTypes = {
  children: PropTypes.node

}

export default ColorInputForm