function format ({city, state, postalCode, country}) {
  const statePostalCode = [state, postalCode].filter(v => v).join(' ')
  return [city, statePostalCode, country].filter(v => v).join(', ')
}

module.exports = format
