#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger = require("3h-log");
const Router = require("3h-router");
const cli = require("./cli");
function pick(arr, defaultVal) {
    return arr && arr.length > 0 ? arr[0] : defaultVal;
}
cli.on('exec', args => {
    if (args.has('h')) {
        return cli.help();
    }
    const router = new Router(), logger = new Logger();
    if (args.has('t')) {
        logger.timeFormat = args.get('t').join(' ');
    }
    if (args.has('l')) {
        router.on('before', url => {
            logger.print('request', url);
            router.route(url);
        });
    }
    if (args.has('r')) {
        router.on('result', result => {
            logger.print('result', result.code.toString());
        });
    }
    if (args.has('e')) {
        router.on('error', err => {
            logger.error(err.message);
        });
    }
    const defaultPagesFlag = '-default-pages';
    if (args.has(defaultPagesFlag)) {
        const { defaultPages } = router;
        args.get(defaultPagesFlag).forEach(defaultPage => {
            defaultPages.unshift(defaultPage);
        });
    }
    const subRoutersFlag = '-sub-routers';
    if (args.has(subRoutersFlag)) {
        const { subRouters } = router;
        args.get(subRoutersFlag).forEach(subRouter => {
            subRouters.unshift(subRouter);
        });
    }
    const port = +pick(args.get('p'), '80');
    router.start(port);
    logger.info(`Server started on port ${port}.`);
}).exec(process.argv);
