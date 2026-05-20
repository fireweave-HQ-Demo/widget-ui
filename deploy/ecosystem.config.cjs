const path = require('path');

/** PM2 must not use its Bun require() fork — ESM build/index.js needs a shell exec. */
module.exports = {
  apps: [
    {
      name: 'widget-ui',
      cwd: path.join(__dirname, '..'),
      script: path.join(__dirname, 'start.sh'),
      interpreter: 'bash',
      env: {
        NODE_ENV: 'production',
        PORT: '3102',
        HOST: '0.0.0.0',
      },
    },
  ],
};
