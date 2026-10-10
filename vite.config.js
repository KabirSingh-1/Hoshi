import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Cloudflare quick tunnels get a new random subdomain each run, so allow the whole domain.
const allowedHosts = ['.trycloudflare.com']

export default defineConfig({
  plugins: [react()],
  server: { allowedHosts },
  preview: { allowedHosts },
})
