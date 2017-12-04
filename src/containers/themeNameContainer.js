//import React from 'react'
import ThemeNameInput from '../components/themeNameInput.js'
import { connect } from 'react-redux'
import { renameTheme } from '../actions'

const mapStateToProps = state => {
  return { themeName: state.get('themeName') }
}

const mapDispatchToProps = dispatch => {
  return {
    updateThemeName: themeName => {
      dispatch(renameTheme(themeName))
    }
  }
}

const ThemeNameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThemeNameInput)

export default ThemeNameContainer