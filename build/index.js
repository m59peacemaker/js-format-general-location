'use strict';

function format(_ref) {
  var city = _ref.city;
  var state = _ref.state;
  var postalCode = _ref.postalCode;
  var country = _ref.country;

  var statePostalCode = [state, postalCode].filter(function (v) {
    return v;
  }).join(' ');
  return [city, statePostalCode, country].filter(function (v) {
    return v;
  }).join(', ');
}

module.exports = format;