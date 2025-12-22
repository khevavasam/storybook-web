import { createSystem, defaultConfig, defineConfig, defineRecipe } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Light theme palette (Cream + Soft Coral + Ink)
        cream: {
          50: { value: '#FFF6F0' },
          100: { value: '#FFEEE6' },
        },
        coral: {
          400: { value: '#FFA7B6' },
          500: { value: '#FF8FA3' }, // Accent / CTA
          600: { value: '#FF7A93' },
          700: { value: '#FF6B88' },
        },
        ui: {
          100: { value: '#E6E8EC' }, // Secondary UI
          200: { value: '#DADDE3' },
        },
        ink2: {
          900: { value: '#1F2933' }, // Text (almost black)
        },

        // Vanta (birds) palette tokens
        birdGold: {
          400: { value: '#F0C27B' }, // color1 (dark)
          500: { value: '#D8943B' }, // color2 (dark)
          600: { value: '#C7822F' },
        },
        birdGreen: {
          600: { value: '#246A4F' }, // color1 (light)
          700: { value: '#1E5A42' },
          800: { value: '#184A36' },
        },
        birdMint: {
          200: { value: '#A8E6C7' }, // color2 (light)
          300: { value: '#8EDDB8' },
          400: { value: '#73D3A8' },
        },
        vantaBg: {
          dark: { value: '#1E0A28' },
          // Use the new cream background in light mode
          light: { value: '{colors.cream.50}' },
        },

        // Base palettes (raw tokens)
        night: {
          950: { value: '#14001F' },
          900: { value: '#1E0A28' },
          800: { value: '#2A1245' },
          700: { value: '#3A1A5E' },
        },
        paper: {
          50: { value: '#FFF6E6' },
          100: { value: '#FFF0D6' },
          200: { value: '#F7E3BF' },
        },
        ink: {
          950: { value: '#14001F' },
          900: { value: '#1B0B2E' },
          800: { value: '#2A1245' },
        },
        // Brand / accent palette (warm yellow / cream)
        brand: {
          50: { value: '#FFF7DC' },
          100: { value: '#FFEFC0' },
          200: { value: '#FFE6A1' },
          300: { value: '#FFDC80' },
          400: { value: '#FFD35E' },
          500: { value: '#FFC83A' },
          600: { value: '#E7AD1B' },
          700: { value: '#B98511' },
          800: { value: '#8A5F0B' },
          900: { value: '#5D3E06' },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Foreground (text / icons)
        fg: {
          default: { value: { _light: '{colors.ink2.900}', _dark: '#F3EDE2' } },
          muted: { value: { _light: '#52606D', _dark: '#D2C7B8' } },
          subtle: { value: { _light: '#7B8794', _dark: '#BDAF9D' } },
          inverted: { value: { _light: '{colors.paper.50}', _dark: '{colors.ink.950}' } },
        },

        // Backgrounds
        bg: {
          // Match the Vanta background so the page feels cohesive
          canvas: { value: { _light: '{colors.vantaBg.light}', _dark: '{colors.vantaBg.dark}' } },
          default: { value: { _light: '#FFFFFF', _dark: '{colors.night.900}' } },
          subtle: { value: { _light: 'rgba(255, 255, 255, 0.65)', _dark: 'rgba(255, 248, 227, 0.06)' } },
          muted: { value: { _light: '{colors.ui.100}', _dark: 'rgba(255, 248, 227, 0.10)' } },
          emphasized: { value: { _light: '{colors.ui.200}', _dark: 'rgba(255, 248, 227, 0.14)' } },
        },

        // Borders / dividers
        border: {
          default: { value: { _light: '{colors.ui.100}', _dark: 'rgba(255, 248, 227, 0.18)' } },
          muted: { value: { _light: 'rgba(230, 232, 236, 0.7)', _dark: 'rgba(255, 248, 227, 0.12)' } },
          emphasized: { value: { _light: '{colors.ui.200}', _dark: 'rgba(255, 248, 227, 0.28)' } },
        },

        // Primary / accent semantics (use in components if needed)
        primary: {
          default: { value: { _light: '{colors.coral.500}', _dark: '{colors.brand.400}' } },
          hover: { value: { _light: '{colors.coral.600}', _dark: '{colors.brand.300}' } },
          active: { value: { _light: '{colors.coral.700}', _dark: '{colors.brand.200}' } },
          contrast: { value: { _light: '{colors.ink2.900}', _dark: '{colors.ink.950}' } },
        },

        // Links
        link: {
          // Also align links with birds palette (green in light, gold in dark)
          default: { value: { _light: '{colors.coral.600}', _dark: '{colors.birdGold.400}' } },
          hover: { value: { _light: '{colors.coral.700}', _dark: '{colors.birdGold.500}' } },
          active: { value: { _light: '{colors.coral.700}', _dark: '{colors.birdGold.600}' } },
        },

        // Button semantics (to avoid "mirror" themes; keep variants consistent)
        button: {
          solid: {
            // Light: Soft Coral CTA, dark: birds-gold CTA
            bg: { value: { _light: '{colors.coral.500}', _dark: '{colors.birdGold.400}' } },
            fg: { value: { _light: '{colors.ink2.900}', _dark: '{colors.ink.950}' } },
            bgHover: { value: { _light: '{colors.coral.600}', _dark: '{colors.birdGold.500}' } },
            bgActive: { value: { _light: '{colors.coral.700}', _dark: '{colors.birdGold.600}' } },
          },
          outline: {
            // In dark: gold outline; in light: coral outline (matching CTA palette)
            fg: { value: { _light: '{colors.coral.600}', _dark: '{colors.birdGold.400}' } },
            border: { value: { _light: 'rgba(255, 143, 163, 0.55)', _dark: 'rgba(240, 194, 123, 0.55)' } },
            // Light: transparent outline (like dark header login)
            bg: { value: { _light: 'transparent', _dark: 'transparent' } },
            bgHover: { value: { _light: 'rgba(255, 143, 163, 0.10)', _dark: 'rgba(240, 194, 123, 0.10)' } },
            bgActive: { value: { _light: 'rgba(255, 143, 163, 0.16)', _dark: 'rgba(240, 194, 123, 0.16)' } },
          },
          ghost: {
            fg: { value: { _light: '{colors.ink2.900}', _dark: '{colors.birdGold.400}' } },
            bgHover: { value: { _light: 'rgba(31, 41, 51, 0.06)', _dark: 'rgba(240, 194, 123, 0.10)' } },
            bgActive: { value: { _light: 'rgba(31, 41, 51, 0.10)', _dark: 'rgba(240, 194, 123, 0.16)' } },
          },
        },

        // Back-compat for existing usage like `bg="chakra-body-bg"`
        'chakra-body-bg': { value: { _light: '{colors.paper.50}', _dark: '{colors.night.950}' } },
        'chakra-body-text': { value: { _light: '{colors.ink.900}', _dark: '#F3EDE2' } },
      },
    },

    recipes: {
      button: defineRecipe({
        variants: {
          variant: {
            solid: {
              bg: 'button.solid.bg',
              color: 'button.solid.fg',
              _hover: { bg: 'button.solid.bgHover' },
              _active: { bg: 'button.solid.bgActive' },
            },
            outline: {
              borderWidth: '1px',
              borderColor: 'button.outline.border',
              color: 'button.outline.fg',
              bg: 'button.outline.bg',
              boxShadow: 'none',
              _hover: { bg: 'button.outline.bgHover' },
              _active: { bg: 'button.outline.bgActive' },
            },
            ghost: {
              color: 'button.ghost.fg',
              bg: 'transparent',
              _hover: { bg: 'button.ghost.bgHover' },
              _active: { bg: 'button.ghost.bgActive' },
            },
            // Header theme-toggle icon: follow theme accent (light coral / dark gold)
            // Use existing Chakra variant name so TS types match.
            plain: {
              color: 'link.default',
              bg: 'transparent',
              _hover: { bg: 'button.ghost.bgHover' },
              _active: { bg: 'button.ghost.bgActive' },
            },
          },
        },
      }),
    },
  },

  // Global styles via Chakra (not component CSS)
  globalCss: {
    html: {
      // Make "brand" the default palette used by Button/Badge/etc.
      _dark: { colorPalette: 'brand' },
      // In light, use coral palette so IconButton matches CTA like in dark
      _light: { colorPalette: 'coral' },
    },
    body: {
      bg: 'bg.canvas',
      color: 'fg.default',
    },
    a: {
      color: 'link.default',
      textDecoration: 'none',
      _hover: { color: 'link.hover', textDecoration: 'none' },
      _active: { color: 'link.active' },
    },
  },
})

export const system = createSystem(defaultConfig, config)
