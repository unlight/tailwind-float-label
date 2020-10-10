const postcss = require('postcss');

module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    theme: {
        extend: {},
    },
    plugins: [require('./src')()],
    corePlugins: {
        container: false,
    },
};
