/* eslint-env node */
'use strict';

function validateConfig(config) {
  if (!config['authToken']) {
    throw new Error(
      `ember-cli-profitwell requires ENV['ember-cli-profitwell']['authToken'] to be set when enabled.`
    );
  }
}

function snippet(config) {
  return `
    <script>
      (function(i,s,o,g,r,a,m){i['ProfitWellObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
      })(window,document,'script','https://dna8twue3dlxq.cloudfront.net/js/profitwell.js','profitwell');

      profitwell('auth_token', '${config.authToken}');
    </script>
  `;
}

module.exports = {
  name: 'ember-cli-profitwell',

  config(/* environment, appConfig */) {
    return {
      'ember-cli-profitwell': {
        enabledEnvironments: ['production']
      }
    };
  },

  contentFor(type, config) {
    const environment = config['environment'];
    const addonConfig = config['ember-cli-profitwell'];
    const shouldInsert = addonConfig['enabledEnvironments'].indexOf(environment) > -1;

    console.log(shouldInsert);
    if (type === 'body-footer' && shouldInsert) {
      validateConfig(addonConfig);

      return snippet(addonConfig);
    }
  }
};
