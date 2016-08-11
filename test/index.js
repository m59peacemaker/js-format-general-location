const test = require('tape')
const formatLocation = require('../')

test('city, state, postalCode, country', t => {
  t.plan(1)
  t.equal(formatLocation({
    city: 'Springfield',
    state: 'TN',
    postalCode: 37172,
    country: 'US'
  }), 'Springfield, TN 37172, US')
})

test('city, state, postalCode', t => {
  t.plan(1)
  t.equal(formatLocation({
    city: 'Springfield',
    state: 'TN',
    postalCode: 37172,
  }), 'Springfield, TN 37172')
})

test('city, state', t => {
  t.plan(1)
  t.equal(formatLocation({
    city: 'Springfield',
    state: 'TN',
  }), 'Springfield, TN')
})

test('city', t => {
  t.plan(1)
  t.equal(formatLocation({
    city: 'Springfield',
  }), 'Springfield')
})

test('city, postalCode, country', t => {
  t.plan(1)
  t.equal(formatLocation({
    city: 'Springfield',
    postalCode: 37172,
    country: 'US'
  }), 'Springfield, 37172, US')
})

test('city, state, country', t => {
  t.plan(1)
  t.equal(formatLocation({
    city: 'Springfield',
    state: 'TN',
    country: 'US'
  }), 'Springfield, TN, US')
})

test('city, country', t => {
  t.plan(1)
  t.equal(formatLocation({
    city: 'Springfield',
    country: 'US'
  }), 'Springfield, US')
})

test('state, postalCode, country', t => {
  t.plan(1)
  t.equal(formatLocation({
    state: 'TN',
    postalCode: 37172,
    country: 'US'
  }), 'TN 37172, US')
})

test('state, postalCode', t => {
  t.plan(1)
  t.equal(formatLocation({
    state: 'TN',
    postalCode: 37172
  }), 'TN 37172')
})

test('state, country', t => {
  t.plan(1)
  t.equal(formatLocation({
    state: 'TN',
    country: 'US'
  }), 'TN, US')
})

test('state', t => {
  t.plan(1)
  t.equal(formatLocation({
    state: 'TN'
  }), 'TN')
})

test('postalCode, country', t => {
  t.plan(1)
  t.equal(formatLocation({
    postalCode: 37172,
    country: 'US'
  }), '37172, US')
})

test('postalCode', t => {
  t.plan(1)
  t.equal(formatLocation({
    postalCode: 37172
  }), '37172')
})

test('country', t => {
  t.plan(1)
  t.equal(formatLocation({
    country: 'US'
  }), 'US')
})

test('empty should return empty string', t => {
  t.plan(1)
  t.equal(formatLocation({}), '')
})
