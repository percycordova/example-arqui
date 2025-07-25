import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    host: true,
    open: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@common': path.resolve(__dirname, './src/common'),
      '@ui': path.resolve(__dirname, './src/common/ui'),
      '@hooks': path.resolve(__dirname, './src/common/hooks'),
      '@lib': path.resolve(__dirname, './src/common/lib'),
      '@config': path.resolve(__dirname, './src/common/config'),
      '@constants': path.resolve(__dirname, './src/common/constants'),
      '@icons': path.resolve(__dirname, './src/common/icons'),
      '@types': path.resolve(__dirname, './src/common/types'),
      '@customer': path.resolve(__dirname, './src/modules/customer-record'),
      '@legal': path.resolve(__dirname, './src/modules/legal-record'),
      '@styles': path.resolve(__dirname, './src/styles')
    }
  }
})
