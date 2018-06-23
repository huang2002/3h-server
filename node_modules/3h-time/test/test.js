const Time = require('../dist/index');

const date = new Date('1234-5-6 7:8:9:101');

const samples = [
    'YYYY-MM-DD',
    'YY-M-D',
    'MMMM dd WW',
    'MMM d W',
    'HH:mm:SS.ss',
    'H:m:S:s A',
    'hh:mm:SS.sss',
    'M-D w h:m a'
];
samples.forEach(fmt => console.log('"' + fmt + '":\t' + Time.format(date, fmt)));
