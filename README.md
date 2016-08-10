# format-general-location

Takes an object of a general location and returns a formatted string.

## install

```sh
npm install format-general-location
```

## example

```js
  const formatLocation = require('format-general-location')

  formatLocation({
    city: 'Springfield',
    state, 'TN'
    postalCode: 37172,
    country: 'US'
  }) // -> "Springfield, TN 37172, US

  formatLocation({
    city: 'Springfield',
    postalCode: 37172,
  }) // -> "Springfield, 37172
```

## API

### formatLocation(location)


- `location: object`
  - `city: string`,
  - `state: string`,
  - `postalCode: string | number`,
  - `country: string`
- **returns**: `string` formatted location
