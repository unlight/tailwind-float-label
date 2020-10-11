import { strict as assert } from 'assert';
import { stripIndents } from 'common-tags';
import postcss from 'postcss';
import tailwindcss from 'tailwindcss';
import defaultConfig from 'tailwindcss/defaultConfig';

import floatLabelFactory, { Options } from '.';

async function process(options?: Options) {
    const corePlugins = Object.keys(defaultConfig.variants).reduce((result, key) => {
        if (!['fontSize', 'lineHeight', 'padding'].includes(key)) {
            result[key] = false;
        }
        return result;
    }, {});
    const config = {
        future: {
            removeDeprecatedGapUtilities: true,
            purgeLayersByDefault: true,
        },
        corePlugins,
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
        new RegExp(stripIndents`.has-float-label {
                position: relative;
                display: flex;
                flex-direction: column-reverse;
            }`),
    );
});

describe('config', () => {
    it.skip('container', async () => {
        const output: string = stripIndents`${await process({
            container: { padding: '0' },
        })}`;
        assert.match(
            output,
            new RegExp(stripIndents`.has-float-label {
                padding: 0;
                position: relative;
                display: flex;
                flex-direction: column-reverse;
            }`),
        );
    });
});
