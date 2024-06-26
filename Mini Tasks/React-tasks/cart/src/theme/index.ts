import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

// Custom styles for input and select components
const inputSelectStyles = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: 'brand.500'
                }
            }
        }
    },
    sizes: {
        md: {
            field: {
                borderRadius: 'none',
            }
        }
    }
};

// Custom focus ring styles for brand color
const brandRing = {
    _focus: {
        ring: 2,
        ringColor: 'brand.500',
    }
};

// Extend the base Chakra UI theme
const theme = extendTheme({
    // Custom color palette
    colors: {
        brand: {
            50: '#f5fee5',
            100: '#e1fbb2',
            200: '#cdf781',
            300: '#b8ee56',
            400: '#a2e032',
            500: '#8ac919',
            600: '#71ab09',
            700: '#578602',
            800: '#3c5e00',
            900: '#203300',
        },
    },
    // Custom font styles
    fonts: {
        heading: `Montserrat, ${base.fonts?.heading}`,
        body: `Inter, ${base.fonts?.body}`,
    },
    // Custom component styles
    components: {
        // Button component
        Button: {
            variants: {
                primary: () => ({
                    rounded: 'none',
                    ...brandRing,
                    color: mode('white', 'gray.800'),
                    backgroundColor: mode('brand.500', 'brand.200'),
                    _hover: {
                        backgroundColor: mode('brand.600', 'brand.300'),
                    },
                    _active: {
                        backgroundColor: mode('brand.700', 'brand.400'),
                    }
                })
            },
        },
        // Input and Select components
        Input: { ...inputSelectStyles },
        Select: { ...inputSelectStyles },
        // Checkbox component
        Checkbox: {
            baseStyle: {
                control: {
                    borderRadius: 'none',
                    ...brandRing,
                }
            }
        }
    },
},
    // Apply the brand color scheme as the default for Checkbox component
    withDefaultColorScheme({
        colorScheme: 'brand',
        components: ['Checkbox'],
    }),
    // Apply the filled variant as the default for Input and Select components
    withDefaultVariant({
        variant: 'filled',
        components: ['Input', 'Select']
    })
);

export default theme;
