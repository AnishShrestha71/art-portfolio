import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// art-portfolio/
export default defineConfig({
  plugins: [react()],
  base: "/art-portfolio/"
})
