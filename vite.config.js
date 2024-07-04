import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Navbar': path.resolve('./src/components/navbar/Nav.jsx'),
      '@Hero': path.resolve('./src/components/hero/Hero.jsx')
    }
  }
});
