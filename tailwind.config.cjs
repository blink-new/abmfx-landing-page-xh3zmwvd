/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				'50': '#f0f9ff',
  				'100': '#e0f2fe',
  				'200': '#bae6fd',
  				'300': '#7dd3fc',
  				'400': '#38bdf8',
  				'500': '#0ea5e9',
  				'600': '#0284c7',
  				'700': '#0369a1',
  				'800': '#075985',
  				'900': '#0c4a6e',
  				'950': '#082f49',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				'50': '#f8fafc',
  				'100': '#f1f5f9',
  				'200': '#e2e8f0',
  				'300': '#cbd5e1',
  				'400': '#94a3b8',
  				'500': '#64748b',
  				'600': '#475569',
  				'700': '#334155',
  				'800': '#1e293b',
  				'900': '#0f172a',
  				'950': '#020617',
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
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
  			},
  			// Futuristic Cyber Colors
  			cyber: {
  				black: 'hsl(var(--cyber-black))',
  				dark: 'hsl(var(--cyber-dark))',
  				blue: 'hsl(var(--cyber-blue))',
  				cyan: 'hsl(var(--cyber-cyan))',
  				purple: 'hsl(var(--cyber-purple))',
  				pink: 'hsl(var(--cyber-pink))',
  				green: 'hsl(var(--cyber-green))'
  			},
  			neon: {
  				blue: 'hsl(var(--neon-blue))',
  				cyan: 'hsl(var(--neon-cyan))',
  				purple: 'hsl(var(--neon-purple))',
  				pink: 'hsl(var(--neon-pink))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'sans-serif'
  			],
  			cyber: [
  				'Orbitron',
  				'monospace'
  			],
  			mono: [
  				'Courier New',
  				'monospace'
  			]
  		},
  		animation: {
  			'fade-in': 'fade-in 0.5s ease-out',
  			'slide-up': 'slide-up 0.5s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'float': 'float 3s ease-in-out infinite',
  			'glitch': 'glitch 0.3s ease-in-out',
  			'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
  			'holographic': 'holographic-move 3s linear infinite',
  			'scan': 'scan 4s linear infinite',
  			'float-cyber': 'float-cyber 4s ease-in-out infinite',
  			'data-stream': 'data-stream 2s ease-in-out infinite'
  		},
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'slide-up': {
  				'0%': {
  					transform: 'translateY(10px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
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
  			'float': {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'glitch': {
  				'0%': { transform: 'translate(0)' },
  				'20%': { transform: 'translate(-2px, 2px)' },
  				'40%': { transform: 'translate(-2px, -2px)' },
  				'60%': { transform: 'translate(2px, 2px)' },
  				'80%': { transform: 'translate(2px, -2px)' },
  				'100%': { transform: 'translate(0)' }
  			},
  			'pulse-neon': {
  				'0%, 100%': { 
  					opacity: '1',
  					boxShadow: '0 0 20px currentColor'
  				},
  				'50%': { 
  					opacity: '0.8',
  					boxShadow: '0 0 30px currentColor'
  				}
  			},
  			'holographic-move': {
  				'0%': { backgroundPosition: '0 0' },
  				'100%': { backgroundPosition: '40px 40px' }
  			},
  			'scan': {
  				'0%': { transform: 'translateX(-100%)' },
  				'100%': { transform: 'translateX(100vw)' }
  			},
  			'float-cyber': {
  				'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
  				'33%': { transform: 'translateY(-10px) rotate(1deg)' },
  				'66%': { transform: 'translateY(5px) rotate(-1deg)' }
  			},
  			'data-stream': {
  				'0%': { opacity: '0', transform: 'translateY(-20px)' },
  				'50%': { opacity: '1' },
  				'100%': { opacity: '0', transform: 'translateY(20px)' }
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backdropBlur: {
  			xs: '2px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}