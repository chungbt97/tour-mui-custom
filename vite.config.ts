import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': `${path.resolve(__dirname, './src/components')}`,
      '@configs': `${path.resolve(__dirname, './src/configs')}`,
      '@contexts': `${path.resolve(__dirname, './src/contexts')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks')}`,
      '@layouts': `${path.resolve(__dirname, './src/layouts')}`,
      '@themes': `${path.resolve(__dirname, './src/themes')}`,
      '@utils': `${path.resolve(__dirname, './src/utils')}`
    }
  }
})
