const postcss = require('postcss');

module.exports = {
    content: ['src/index.html', 'src/index.ts'],
    theme: {
        extend: {},
    },
    plugins: [require('./src')()],
    corePlugins: {
        container: false,
    },
};
