
const Button = {
    baseStyle: {
        borderRadius: 5,
        paddingHorizontal: 20,
        backgroundColor: '#ee70f7',
        _text: {
            fontFamily: 'SourceSansPro-SemiBold',
            margin: 0,
            padding: 0,
        },
        _icon: {
            marginRight: 14,
        },
    },
    defaultProps: {
        variant: 'text',
        size: 'md',
    },
    variants: {
        contained: ({ colorScheme }: any) => ({
            backgroundColor: 'primary',
            _text: {
                color: 'white',
            },
            _pressed: {
                backgroundColor: "#21a5de",
                shadow: 0,
            },
            _disabled: {
                opacity: 1,
                backgroundColor: '#E7E9EC',
                _text: {
                    color: 'disabled',
                },
            },
        }),
        outlined: () => ({
            borderWidth: 1,
            borderColor: 'primary',
            backgroundColor: 'transparent',
            _text: {
                color: 'primaryText',
            },
            _pressed: {
                opacity: "#21a5de",
                shadow: 0,
            },
        }),

    },
    sizes: {
        lg: {
            height: 50,
            _text: {
                fontSize: 14,
            },
        },
    },
}


const Text = {
    baseStyle: {
        fontFamily: 'SourceSansPro',
    },
    defaultProps: {
        variant: 'body',
    },
    variants: {
        headOne: ({ colorScheme }: any) => ({
            fontSize: 34,
            lineHeight: 32,
            color: colorScheme || 'primaryText',
        }),
        headTwo: ({ colorScheme }: any) => ({
            fontSize: 22,
            lineHeight: 26,
            color: colorScheme || 'primaryText',
        }),
        body: ({ colorScheme }: any) => ({
            fontSize: 18,
            lineHeight: 24,
            color: colorScheme || 'primaryText',
        }),
        link: ({ colorScheme }: any) => ({
            fontSize: 17,
            lineHeight: 24,
            color: colorScheme || 'primaryText',
        })
    },
}
const components = {
    Button,
    Text
}

export default components