export const generateDerivativeRules = (rules) => {
    return rules.reduce(
      (s, c) => 
        s + '.' + c.className + ' { ' +
        c.properties.reduce((rules, p) => rules + p.property + ": " + p.value + " !important; ", '')
        + '}\n'
      , '')
  }