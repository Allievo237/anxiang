import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 本子应用完全独立：base 使用相对路径，构建产物可被主项目以 iframe 直接加载，
// 不引入 three / react-three-fiber / rapier / meshline，也不新建任何 WebGL Canvas。
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'bundle',
    emptyOutDir: true,
    sourcemap: false
  }
});
