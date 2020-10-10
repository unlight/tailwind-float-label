const postcss = require('postcss');

module.exports = {
    theme: {
        extend: {},
    },
    plugins: [require('./src')()],
    corePlugins: {
        container: false,
    },
};
