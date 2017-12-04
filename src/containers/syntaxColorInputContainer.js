// SyntaxColorInputContainer includes the color input and the 
// contrast widget, it modifies CSS rules of the code container

import React from 'react';
import ColorInput from '../components/colorInput.js'
import ContrastWidget from '../components/contrastWidget.js'

class SyntaxColorInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }
  handleChange = (value) => {
    this.setState({ value });
  };
  render() {
    const {
      label,
      className,
      background
    } = this.props;
    return (
      <div>
        <style jsx>{`
          .${className.length > 1 ? className.join(', .') : className[0]} {
            color: ${this.state.value} !important;
          }
        `}</style>
        <ColorInput
          value={this.state.value} 
          label={label}
          onChange={this.handleChange} />
         <ContrastWidget
          foreground={this.state.value}
          background={background}
          />
      </div>
      
    )
  }
}

export default SyntaxColorInputContainer;