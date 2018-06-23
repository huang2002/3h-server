"use strict";
const replacers = require("./replacers");
const Time = {
    replacers,
    get(format) {
        return Time.format(new Date(), format);
    },
    format(date, format) {
        let ans = format;
        const ids = format.match(/\b\w+\b/g);
        if (ids) {
            ids.forEach(id => {
                const replacer = replacers[id];
                if (replacer) {
                    ans = ans.replace(id, replacer(date));
                }
            });
        }
        return ans;
    }
};
module.exports = Time;
