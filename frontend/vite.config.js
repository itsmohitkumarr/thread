import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     proxy: {
//       "/api": {
//         target: "https://threads-backend-qo74.onrender.com",
//         changeOrigin: true,
//         secure: false,
//       },
//     },
//   },
// });

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
