import { DeepPartial } from 'simplytyped';

export type Options = {
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
    const config: Options = Object.assign(
        {},
        {
            control: 'pt-1 pb-1',
            label: {
                ['@apply leading-none text-xs px-1']: '',
                // fontSize: 'calc(42 / 60 * 100%)',
                top: 0,
                left: '0.25rem',
            },
        },
        options,
    );

    return ({ addComponents }) => {
        const container = config.container ? toObject(config.container) : {};
        const control = config.control ? toObject(config.control) : {};
        const label = config.label ? toObject(config.label) : {};
        const floatLabel = {
            ...label,
            // position: absolute; top/left will be faster
            // if used on elements without transitions
            position: 'absolute',
            // transition: 'all 100ms',
        };
        const showLabel = {
            opacity: 1,
            transform: 'translate(0, -50%)',
        };

        addComponents({
            '.has-float-label': {
                ...container,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column-reverse',
            },
            '.is-float-label': floatLabel,
            '.control-with-float-label': {
                ...control,
                '& + .is-float-label': {
                    opacity: 0,
                },
                '&:not(:placeholder-shown) + .is-float-label': showLabel,
            },
            '.is-float-label-sticky': {
                ...floatLabel,
                ...showLabel,
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
