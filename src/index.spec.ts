import { strict as assert } from 'node:assert';
import { stripIndents } from 'common-tags';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';

import floatLabelFactory, { Options } from '.';

async function process(options?: Options) {
    const config = {
        content: ['src/index.html', 'src/index.ts'],
        // corePlugins,
        plugins: [floatLabelFactory(options)],
    };
    return postcss(tailwindcss(config))
        .process('@tailwind components', { from: undefined, map: false })
        .then((result) => {
            assert.equal(result.warnings().length, 0);
            return result.content;
        });
}

it('smoke', () => {
    assert.equal(typeof floatLabelFactory, 'function');
});

it('generate components', async () => {
    const output: string = stripIndents`${await process()}`;
    assert.match(
        output,
        new RegExp(stripIndents`.float-label-container {
                position: relative;
                display: flex;
                flex-direction: column-reverse;
            }`),
    );
});
