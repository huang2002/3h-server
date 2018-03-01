#! node
const CLI = require('3h-cli'),
    Logger = require('3h-log'),
    Router = require('3h-router');

const cli = new CLI(),
    logger = new Logger();

cli.set({
    name: '3h-sever',
    title: 'Start a sever in current directory.',
    nameSize: 7,
    gapSize: 10
}).first({
    name: 'pt',
    val: 'port',
    help: 'The port to listen on.'
}).arg({
    name: 'h',
    help: 'Show help info.'
}).arg({
    name: 'ne',
    help: 'No error logs for the router.'
}).arg({
    name: 'lp',
    help: 'Log pathes before routing.'
}).arg({
    name: 'dp',
    val: 'files',
    help: 'Default pages.'
}).arg({
    name: 'sr',
    val: 'files',
    help: 'Sub-router files.'
}).arg({
    name: 'pf',
    val: 'files',
    help: 'Private files.'
}).arg({
    name: 'pd',
    val: 'dirs',
    help: 'Private directories.'
}).on('error', err => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
}).on('extra', key => {
    console.log(`Unknown arg "${key}"!`);
    process.exit(1);
}).on('exec', args => {

    if (args.has('h')) {
        cli.help();
        process.exit(0);
    }

    const router = new Router(process.cwd());

    if (args.has('dp')) {
        args.get('dp').forEach(page => {
            Router.defaultPages.push(page);
        });
    }
    if (args.has('pf')) {
        args.get('pf').forEach(file => {
            Router.privateFiles.push(file);
        });
    }
    if (args.has('pd')) {
        args.get('pd').forEach(dir => {
            Router.privateDirectories.push(dir);
        });
    }
    if (args.has('sr')) {
        Router.subRouter = args.get('sr')[0];
    }

    if (!args.has('ne')) {
        router.on('error', err => {
            logger.error(err.message);
        });
    }
    if (args.has('lp')) {
        router.on('before', ({ request }) => {
            logger.info(`URL: ${request.url}`);
        });
    }

    router.start(args.has('pt') && args.get('pt')[0] || 80);

}).exec(process.argv);
