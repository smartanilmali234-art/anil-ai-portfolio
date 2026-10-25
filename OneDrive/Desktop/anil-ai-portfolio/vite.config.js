import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This must match the GitHub repository name.
// If you use smartanilmali234-art.github.io as the repository name, change to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/anil-ai-portfolio/'
})