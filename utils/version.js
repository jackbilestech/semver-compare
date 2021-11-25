#!/usr/bin/env node

var compareVersions = require('compare-versions');
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

if (!argv.base || !argv.head) {
  throw new Error("Arguments needed")
}

if (!compareVersions.compare(argv.head, argv.base, argv.operator || '>')) {
  throw new Error(`${argv.head} Is Not ${argv.operator || '>'} Than ${argv.base}`)
}

console.log('Version OKAY');