import React, { Component } from 'react'

class themeNameInput extends Component { 
  updateThemeName = (e) => {
    this.props.updateThemeName(e.target.value)
  }
  onBlur = (e) => {
    if (e.target.value.trim() === '') {
      this.props.updateThemeName('untitled')
    } else {
      this.props.updateThemeName(e.target.value.trim())
    }
  }
  render() {
    return (
      <input 
        autoFocus
        type='text'
        onChange = {this.updateThemeName}
        value={this.props.themeName} 
        className='f3 w-100 fl' 
        onBlur={this.onBlur}
        placeholder='Give your theme a name' 
      />
    )
  }
}

export default themeNameInput