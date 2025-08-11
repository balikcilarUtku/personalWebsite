// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import os from 'node:os'

const cacheDir = path.join(process.env.LOCALAPPDATA ?? os.tmpdir(), 'vite', 'webUtkuBalikcilar')

export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 5173 },
  cacheDir
})
