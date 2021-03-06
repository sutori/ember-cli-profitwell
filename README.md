# ember-cli-profitwell

[![Greenkeeper badge](https://badges.greenkeeper.io/sutori/ember-cli-profitwell.svg)](https://greenkeeper.io/)

This addon inserts the [ProfitWell][profit-well] script into the
`<head>` of the page for you.

## Installation

```
ember install ember-cli-profitwell
```

After installing the addon, you **MUST** provide a configuration value for your
authentication token.

## Configuration

You can configure some of the variables used in the inserted script.

```javascript
// config/environment.js

ENV['ember-cli-profitwell'] = {
  enabledEnvironments: ['production'], // default
  authToken: 'YourAuthToken'           // required, no default
};
```

[profit-well]: https://www.profitwell.com

## Usage

The addon exposes a `profitwell` service through which you can set the email of
the current logged in user.

```javascript
// some component/controller/route

profitwell: Ember.inject.service(),

onLogin(userEmail) {
  this.get('profitwell').setUserEmail(userEmail);
}

...
```
