import ColorInputForm from '../components/colorInputForm.js'
import { connect } from 'react-redux'
import { updateBgColor, updateSyntaxColor } from '../actions'

const mapStateToProps = state => {
  return { 
    themeName: state.themeName,
    bgColor: state.bgColor,
    themeTemplate: state.baseTheme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateBgColor: (bgColor) => {
      dispatch(updateBgColor(bgColor))
    },
    updateSyntaxColor: (label, value) => {
      dispatch(updateSyntaxColor(label, value))
    }
  }
}

const ColorInputFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorInputForm)

export default ColorInputFormContainer

