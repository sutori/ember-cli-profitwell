# ember-cli-profitwell

This addon inserts the [ProfitWell][profit-well] script into the
`<head>` of the page for you.

## Installation

```
ember install ember-cli-profitwell
```

After installing the addon, you **MUST** provide a configuration value for your
authentication token.

## Configuration

You can configure some of the variables used in the inserted recording script.

```javascript
// config/environment.js

ENV['ember-cli-profitwell'] = {
  enabledEnvironments: ['production'], // default
  authToken: 'YourAuthToken'           // required, no default
};
```

[profit-well]: https://www.profitwell.com
