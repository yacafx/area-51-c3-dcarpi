const nxPreset = require('@nrwl/jest/preset');
const myConf = { ...nxPreset };
myConf.coverageReporters = ['json-summary', 'text'];
myConf.coverageThreshold = {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80
  }
};
module.exports = { ...myConf };
