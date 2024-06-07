import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://hipokampus-ws-48fade54ad9b.herokuapp.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api/"),
      },
    },
  },
});