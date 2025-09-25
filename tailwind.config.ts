import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Design system colors
				'neon-green': {
					DEFAULT: 'hsl(var(--neon-green))',
					dim: 'hsl(var(--neon-green-dim))'
				},
				'purple-accent': {
					DEFAULT: 'hsl(var(--purple-accent))',
					light: 'hsl(var(--purple-light))'
				},
				surface: {
					DEFAULT: 'hsl(var(--surface))',
					light: 'hsl(var(--surface-light))'
				},
				text: {
					primary: 'hsl(var(--text-primary))',
					secondary: 'hsl(var(--text-secondary))',
					accent: 'hsl(var(--text-accent))',
					muted: 'hsl(var(--text-muted))'
				},
				button: {
					primary: 'hsl(var(--button-primary))',
					secondary: 'hsl(var(--button-secondary))'
				},
				border: {
					DEFAULT: 'hsl(var(--border))',
					subtle: 'hsl(var(--border-subtle))',
					accent: 'hsl(var(--border-accent))'
				},
				// Legacy shadcn colors
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'inter': ['Inter', 'sans-serif'],
				'space': ['Space Grotesk', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				"hexagon-spin": {
					"0%": { transform: "rotate(0deg)" },
					"100%": { transform: "rotate(360deg)" }
				},
				"float": {
					"0%, 100%": { transform: "translateY(0px)" },
					"50%": { transform: "translateY(-10px)" }
				},
				"glow": {
					"0%, 100%": { boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" },
					"50%": { boxShadow: "0 0 40px rgba(34, 197, 94, 0.8)" }
				},
				"slide-up": {
					"0%": { transform: "translateY(100px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"slide-down": {
					"0%": { transform: "translateY(-100px)", opacity: "0" },
					"100%": { transform: "translateY(0)", opacity: "1" }
				},
				"slide-left": {
					"0%": { transform: "translateX(100px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"slide-right": {
					"0%": { transform: "translateX(-100px)", opacity: "0" },
					"100%": { transform: "translateX(0)", opacity: "1" }
				},
				"magical-spin": {
					"0%": { transform: "rotate(0deg) scale(1)" },
					"50%": { transform: "rotate(180deg) scale(1.1)" },
					"100%": { transform: "rotate(360deg) scale(1)" }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				"hexagon-spin": "hexagon-spin 6s linear infinite",
				"float": "float 3s ease-in-out infinite",
				"glow": "glow 2s ease-in-out infinite",
				"slide-up": "slide-up 0.6s ease-out",
				"slide-down": "slide-down 0.6s ease-out", 
				"slide-left": "slide-left 0.6s ease-out",
				"slide-right": "slide-right 0.6s ease-out",
				"magical-spin": "magical-spin 4s ease-in-out infinite"
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }) {
			addUtilities({
				'.scrollbar-thin': {
					'scrollbar-width': 'thin',
				},
				'.scrollbar-track-background': {
					'scrollbar-color': 'hsl(var(--background)) transparent',
				},
				'.scrollbar-thumb-neon-green\\/30': {
					'scrollbar-color': 'hsl(var(--neon-green) / 0.3) transparent',
				},
				'::-webkit-scrollbar': {
					width: '6px',
				},
				'::-webkit-scrollbar-track': {
					background: 'hsl(var(--background))',
				},
				'::-webkit-scrollbar-thumb': {
					background: 'hsl(var(--neon-green) / 0.3)',
					'border-radius': '3px',
				},
				'::-webkit-scrollbar-thumb:hover': {
					background: 'hsl(var(--neon-green) / 0.5)',
				},
			});
		}
	],
} satisfies Config;
