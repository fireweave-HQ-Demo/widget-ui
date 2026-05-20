const path = require('path');

module.exports = {
  apps: [
    {
      name: 'widget-ui',
      cwd: path.join(__dirname, '..'),
      script: 'build/index.js',
      interpreter: 'bun',
      env: {
        NODE_ENV: 'production',
        PORT: '3102',
        HOST: '0.0.0.0',
      },
    },
  ],
};
