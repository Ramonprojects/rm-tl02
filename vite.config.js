import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Compat com Android antigo (Chrome 80+, iOS 13+)
    target: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    cssTarget: ['chrome87', 'safari14', 'firefox78', 'edge88'],
  },
})
