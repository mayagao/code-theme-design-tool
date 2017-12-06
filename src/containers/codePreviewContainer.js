//import React from 'react'
import codePreview from '../components/codePreview.js'
import { connect } from 'react-redux'
import { switchBaseThemeLight, switchBaseThemeDark } from '../actions'

const mapStateToProps = state => {
  return { 
    theme: state.baseThemeName, 
    themeName: state.themeName 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    switchThemeLight: () => {
      dispatch(switchBaseThemeLight())
    },
    switchThemeDark: () => {
      dispatch(switchBaseThemeDark())
    }
  }
}

const CodePreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(codePreview)

export default CodePreviewContainer