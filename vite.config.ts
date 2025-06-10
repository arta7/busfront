// /* eslint-disable node/no-unpublished-import */
// import {defineConfig} from 'vite';
// import react from '@vitejs/plugin-react';


// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//   },
  
// });


/* eslint-disable node/no-unpublished-import */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { eslint as eslintPlugin } from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // process.env.DISABLE_ESLINT_PLUGIN !== 'true' ? eslintPlugin() : null
  ].filter(Boolean),
  server: {
    port: 3000,
  },
   base: 'https://kalanholding.com/'
});

