'use strict';
const start = require('./index.js');
const yargs = require('yargs')
.options({
  port: {
    default: '8080'
  },
  dataFile: {
    default: './data.js'
  }
})
.argv;

const data = require(yargs.dataFile);
start(yargs.port, data);
