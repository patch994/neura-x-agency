import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/neura-x-agency/', // Important : mets exactement le nom de ton repo GitHub
})
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
