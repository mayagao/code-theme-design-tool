import {
  RENAME_THEME,
  SWITCH_BASE_THEME_LIGHT,
  SWITCH_BASE_THEME_DARK,
  UPDATE_BG_COLOR,
  UPDATE_SYNTAX_COLOR
} from '../constants/ActionTypes'

import Immutable from 'immutable'
import _darkThemeTemplate from '../api/darkThemeTemplate.json'
import _lightThemeTemplate from '../api/lightThemeTemplate.json'

const initialState = Immutable.Map({
  themeName: 'untitled',
  baseThemeName: 'light',
  baseTheme: Immutable.fromJS(_lightThemeTemplate),
  bgColor: '#fff'
})

const themeApp = (state = initialState, action) => {
  switch (action.type) {
    case RENAME_THEME:
      state.set('themeName', action.themeName)
      break
    case SWITCH_BASE_THEME_LIGHT:
      if (state.get('baseThemeName') !== 'light') {
        state.set('baseThemeName', 'light')
        state.set('baseTheme', Immutable.fromJS(_lightThemeTemplate))
      }
      break
    case SWITCH_BASE_THEME_DARK:
      if (state.get('baseThemeName') !== 'dark') {
        state.set('baseThemeName', 'dark')
        state.set('baseTheme', Immutable.fromJS(_darkThemeTemplate))
      }
      break
    case UPDATE_BG_COLOR:
      state.set('bgColor', action.bgColor)
      break
    case UPDATE_SYNTAX_COLOR:
      state.setIn(['baseTheme', 'themeSyntax'])
           .findEntry(entry => entry.get('lable') === action.lable)[1]
           .set('value', action.value)
      break
    default:
      break
  }
  return state
}

export default themeApp