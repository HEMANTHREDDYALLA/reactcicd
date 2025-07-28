import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Replace "reactcicd" with your actual repo name!
export default defineConfig({
  base: '/https://github.com/HEMANTHREDDYALLA/reactcicd.git/',
  plugins: [react()],
})
