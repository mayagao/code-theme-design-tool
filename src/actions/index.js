import * as types from '../constants/ActionTypes'

export function renameTheme(themeName) {
  return {
    type: types.RENAME_THEME,
    themeName
  }
}

export function switchBaseThemeLight() {
  return {
    type: types.SWITCH_BASE_THEME_LIGHT
  }
}

export function switchBaseThemeDark() {
  return {
    type: types.SWITCH_BASE_THEME_DARK
  }
}

export function updateBgColor(bgColor) {
  return {
    type: types.UPDATE_BG_COLOR,
    bgColor
  }
}

export function updateSyntaxColor(label, value) {
  return {
    type: types.UPDATE_SYNTAX_COLOR,
    label,
    value
  }
}