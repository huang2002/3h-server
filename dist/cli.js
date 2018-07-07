"use strict";
const CLI = require("3h-cli");
const cli = CLI.create({
    name: '3h-server',
    title: 'A cli server lib.',
    nameSize: 16,
    gapSize: 12,
    lineGapSize: 1
}).arg({
    name: 'h',
    alias: ['-help'],
    help: 'Show help info.'
}).arg({
    name: 'p',
    alias: ['-port'],
    val: 'port',
    help: 'The port to listen on.\n' +
        'Default: 80'
}).arg({
    name: 'l',
    alias: ['-log'],
    help: 'Log request urls.'
}).arg({
    name: 'r',
    alias: ['-result'],
    help: 'Log request results.'
}).arg({
    name: 'e',
    alias: ['-err'],
    help: 'Log errors.'
}).arg({
    name: 't',
    alias: ['-time'],
    val: 'format',
    help: 'Time format.'
}).arg({
    name: '-default-pages',
    val: 'files...',
    help: 'Additional default pages.'
}).arg({
    name: '-sub-routers',
    val: 'files...',
    help: 'Additional sub-routers.'
});
module.exports = cli;
