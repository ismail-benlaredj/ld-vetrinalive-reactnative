
const Button = {
    baseStyle: {
        borderRadius: 5,
        paddingHorizontal: 20,
        backgroundColor: '#ee70f7',
        _text: {
            margin: 0,
            padding: 0,
        },
        _icon: {
            marginLeft: 14,
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
                backgroundColor: 'grayLight',
                _text: {
                    color: 'grayDark',
                    fontWeight: "semibold",
                    fonsSize: 16,
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
        }),
        number: ({ colorScheme }: any) => ({
            fontSize: 28,
            lineHeight: 26,
            color: colorScheme || 'primaryText',
        })
    },
}
const components = {
    Button,
    Text
}

export default components