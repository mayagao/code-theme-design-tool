export const generateDerivativeRules = (rules) => {
    return rules.reduce(
      (s, c) => 
        s + '.cm-s-themeName .' + c.className + ' { ' +
        c.properties.reduce((rules, p) => rules + p.property + ": " + p.value + "; ", '')
        + '}\n'
      , '')
  }