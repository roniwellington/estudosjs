const getFlagValue = require('./flags.js')

console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)