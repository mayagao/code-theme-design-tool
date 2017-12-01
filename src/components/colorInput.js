// ColorInput is stateless

import React from 'react'
import { isTooBright } from '../utils/isTooBright'

class ColorInput extends React.Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };
  render() {
    const {
      value,
      label
    } = this.props;
    let tooBright = isTooBright(value);
    return (

      <div className='mb1'>
      <style jsx>{`
      input {
        color: rgba(0,0,0, 0.7);
        border: transparent;
        background-color: transparent;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 0;
        padding: 5px 0px;
        outline: none;
      }
      input:focus {
        color: rgba(0,0,0, 1);
        border-bottom: 1px solid dodgerblue;
        transition: all 0.2 linear;
      }
    `}</style>
        <div className='w4 lh-copy f6'>{label}</div>
        <div className='relative'>
          <input className='code w-100 pv1 mt0 mb0' type='input' value = {value} onChange={this.handleChange} />
          <div className={`${tooBright ? 'ba b--black-10' : ''} mt1 w2 h1 br2 right top-0 right-0 absolute`}  style = {{ background: `${value}`}} />
          <input 
            className='pointer o-0 dn db-ns right top-0 right-0 absolute' 
            type='color' 
            value={value} 
            onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

export default ColorInput;