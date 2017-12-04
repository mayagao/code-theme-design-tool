import React, { Component } from 'react'

class themeNameInput extends Component { 
  updateThemeName = (e) => {
    console.log(this.props.themeName)
    this.props.updateThemeName(e.target.value)
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