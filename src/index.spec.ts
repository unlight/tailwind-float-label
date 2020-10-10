import assert from 'assert';
import { stripIndents } from 'common-tags';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import defaultConfig from 'tailwindcss/defaultConfig';

import floatLabelFactory from '.';

async function process(input) {
    const config = {
        plugins: [floatLabelFactory()],
    };
    return postcss([tailwindcss(config)])
        .process(input, { from: undefined })
        .then((result) => {
            assert(result.warnings().length === 0);
            return result.css;
        });
}

it('smoke', () => {
    assert(typeof floatLabelFactory === 'function');
});
