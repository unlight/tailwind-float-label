const defaultConfig = {
    control: 'pt-2 pb-1',
    label: {
        ...toObject('leading-none text-xs px-1'),
        top: 'calc(-0.125rem * 3)',
        left: '0.25rem',
    },
};

module.exports = floatLabelFactory;

export default floatLabelFactory;

function floatLabelFactory() {
    const config = { ...defaultConfig };

    return ({ addComponents }) => {
        const control = toObject(config.control);
        const label = toObject(config.label);

        addComponents({
            '.has-float-label': {
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

function toObject(value: { [k: string]: unknown } | string): { [k: string]: unknown } {
    if (typeof value === 'string') {
        return { [`@apply ${value}`]: '' };
    }
    return value;
}
