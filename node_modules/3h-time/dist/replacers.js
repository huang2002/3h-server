"use strict";
const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
], days = [
    'Monday', 'Tuesday', 'Wednesday', 'Thousday', 'Friday', 'Saturday', 'Sunday'
], shortDays = [
    'Mon', 'Tues', 'Wed', 'Thou', 'Fri', 'Sat', 'Sun'
];
function getPostfix(date) {
    if ([11, 12, 13].includes(date)) {
        return 'th';
    }
    else {
        const x = +date.toString().padStart(2, '0')[1];
        switch (x) {
            case 1:
                return 'st';
            case 2:
                return 'nd';
            case 3:
                return 'rd';
            default:
                return 'th';
                ;
        }
    }
}
const replacers = {
    YYYY(date) {
        return date.getFullYear().toString();
    },
    YY(date) {
        return date.getFullYear().toString().slice(-2);
    },
    MMMM(date) {
        return months[date.getMonth()];
    },
    MMM(date) {
        return months[date.getMonth()].slice(0, 3);
    },
    MM(date) {
        return (date.getMonth() + 1).toString().padStart(2, '0');
    },
    M(date) {
        return (date.getMonth() + 1).toString();
    },
    DD(date) {
        return date.getDate().toString().padStart(2, '0');
    },
    D(date) {
        return date.getDate().toString();
    },
    dd(date) {
        const d = date.getDate();
        return d.toString().padStart(2, '0') + getPostfix(d);
    },
    d(date) {
        const d = date.getDate();
        return d + getPostfix(d);
    },
    HH(date) {
        return date.getHours().toString().padStart(2, '0');
    },
    H(date) {
        return date.getHours().toString();
    },
    hh(date) {
        return (date.getHours() % 12).toString().padStart(2, '0');
    },
    h(date) {
        return (date.getHours() % 12).toString();
    },
    mm(date) {
        return date.getMinutes().toString().padStart(2, '0');
    },
    m(date) {
        return date.getMinutes().toString();
    },
    SS(date) {
        return date.getSeconds().toString().padStart(2, '0');
    },
    S(date) {
        return date.getSeconds().toString();
    },
    sss(date) {
        return date.getMilliseconds().toString().padStart(3, '0');
    },
    ss(date) {
        return date.getMilliseconds().toString().padStart(2, '0').slice(0, 2);
    },
    s(date) {
        return date.getMilliseconds().toString().slice(0, 1);
    },
    WW(date) {
        return days[date.getDay() - 1];
    },
    W(date) {
        return shortDays[date.getDay() - 1];
    },
    ww(date) {
        return date.getDay().toString().padStart(2, '0');
    },
    w(date) {
        return date.getDay().toString();
    },
    A(date) {
        return date.getHours() < 12 ? 'AM' : 'PM';
    },
    a(date) {
        return date.getHours() < 12 ? 'am' : 'pm';
    }
};
module.exports = replacers;
