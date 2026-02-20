import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: Change 'portfolio' below to your GitHub repo name
// e.g. if your repo is github.com/aravindr-res01/my-portfolio, use '/my-portfolio/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
