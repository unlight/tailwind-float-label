import { DeepPartial } from 'simplytyped';

const defaultConfig = {
    control: 'pt-2 pb-1',
    label: {
        ...toObject('leading-none text-xs px-1'),
        top: 'calc(-0.125rem * 3)',
        left: '0.25rem',
    },
};

type Options = {
    /**
     * Custom styles for container.
     */
    container?: DeepPartial<{ [k: string]: string } | string>;
    /**
     * Custom styles for input control.
     */
    control?: DeepPartial<{ [k: string]: string } | string>;
    /**
     * Custom styles for label.
     */
    label?: DeepPartial<{ [k: string]: string } | string>;
};

module.exports = floatLabelFactory;

export default function floatLabelFactory(options?: Options) {
    const config: Options = { ...defaultConfig, ...options };

    return ({ addComponents }) => {
        const container = config.container ? toObject(config.container) : {};
        const control = config.control ? toObject(config.control) : {};
        const label = config.label ? toObject(config.label) : {};

        addComponents({
            '.has-float-label': {
                ...container,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column-reverse',
                '& > .is-float-label': {
                    ...label,
                    // position: absolute; top/left will be faster
                    // if used on elements without transitions
                    position: 'absolute',
                },
                '& > .control-with-float-label': {
                    ...control,
                    '& + .is-float-label': {
                        opacity: 0,
                    },
                    '&:not(:placeholder-shown) + .is-float-label': {
                        opacity: 1,
                    },
                },
            },
        });
    };
}

function toObject(
    value: DeepPartial<{ [k: string]: string } | string>,
): DeepPartial<{ [k: string]: string }> {
    if (typeof value === 'string') {
        return { [`@apply ${value}`]: '' };
    }
    return value;
}
