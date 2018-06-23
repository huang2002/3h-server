"use strict";
const Time = require("3h-time");
const defaultLevels = [
    'error',
    'warn',
    'info',
    'log',
    'debug'
];
class Logger {
    constructor(options = {}) {
        this.logTime = true;
        this.timeFormat = '[HH:MM:SS]';
        this.upperCasePrefix = true;
        this.prefixLength = 6;
        this.levels = defaultLevels;
        this.output = console.log;
        Object.assign(this, options);
        this.enableAll();
    }
    fixAlign(prefix) {
        return prefix.padStart(this.prefixLength);
    }
    setLevel(prefix) {
        const level = this.levels.indexOf(prefix);
        if (level !== -1) {
            this.level = level;
        }
        return this;
    }
    enableAll() {
        this.level = this.levels.length - 1;
        return this;
    }
    disableAll() {
        this.level = -1;
        return this;
    }
    format(prefix, message) {
        let ans = '';
        if (this.logTime) {
            ans += Time.get(this.timeFormat) + ' ';
        }
        if (this.upperCasePrefix) {
            prefix = prefix.toUpperCase();
        }
        ans += this.fixAlign(prefix) + ': ';
        return ans + message;
    }
    print(prefix, message) {
        const { level, levels } = this;
        if (levels.indexOf(prefix) <= level) {
            this.output(this.format(prefix, message));
            return true;
        }
        else {
            return false;
        }
    }
    error(message) {
        return this.print('error', message);
    }
    warn(message) {
        return this.print('warn', message);
    }
    info(message) {
        return this.print('info', message);
    }
    log(message) {
        return this.print('log', message);
    }
    debug(message) {
        return this.print('debug', message);
    }
}
Logger.defaultLevels = defaultLevels;
module.exports = Logger;
