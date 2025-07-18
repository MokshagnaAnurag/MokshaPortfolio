
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
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
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
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
<<<<<<< HEAD
=======
					DEFAULT: '#3b82f6', // blue-600
					foreground: '#fff',
				},
				secondary: {
					DEFAULT: '#e0e7ff', // blue-100
					foreground: '#1e293b',
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#fff',
				},
				muted: {
					DEFAULT: '#f1f5f9',
					foreground: '#64748b',
				},
				accent: {
					DEFAULT: '#60a5fa', // blue-400
					foreground: '#1e293b',
				},
				popover: {
					DEFAULT: '#fff',
					foreground: '#1e293b',
				},
				card: {
					DEFAULT: '#fff',
					foreground: '#1e293b',
				},
				sidebar: {
					DEFAULT: '#1e293b',
					foreground: '#fff',
					primary: '#3b82f6',
					'primary-foreground': '#fff',
					accent: '#60a5fa',
					'accent-foreground': '#1e293b',
					border: '#3b82f6',
					ring: '#3b82f6',
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
				},
				tech: {
					'iot': '#4e7de9',
					'embedded': '#ff6b6b',
					'robotics': '#6bcb77',
					'ai': '#9b5de5',
<<<<<<< HEAD
<<<<<<< HEAD
					'cybersec': '#f15bb5'
=======
					'cybersec': '#f15bb5',
>>>>>>> ab37948 (Initial commit)
=======
					'cybersec': '#f15bb5'
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'gradient-x': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
<<<<<<< HEAD
<<<<<<< HEAD
=======
				},
				'spotlight': {
					'0%': {
						opacity: '0',
						transform: 'translate(-72%, -62%) scale(0.5)',
					},
					'100%': {
						opacity: '1',
						transform: 'translate(-50%,-40%) scale(1)',
					},
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'gradient-x': 'gradient-x 15s ease infinite',
<<<<<<< HEAD
<<<<<<< HEAD
				'spin-slow': 'spin-slow 12s linear infinite'
=======
				'spin-slow': 'spin-slow 12s linear infinite',
				'spotlight': 'spotlight 2s ease .75s 1 forwards'
>>>>>>> ab37948 (Initial commit)
=======
				'spin-slow': 'spin-slow 12s linear infinite'
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
