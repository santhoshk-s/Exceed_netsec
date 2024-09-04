import { defineConfig } from 'vite'
import postcss from './postcss.config.cjs'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': process.env
  },
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
})

// import { defineConfig } from 'vite'
// import postcss from './postcss.config.cjs'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     'process.env': process.env
//   },
//   css: {
//     postcss,
//   },
//   plugins: [react()],
//   resolve: {
//     alias: [
//       {
//         find: /^~.+/,
//         replacement: (val) => {
//           return val.replace(/^~/, "");
//         },
//       },
//     ],
//   },
//   build: {
//     commonjsOptions: {
//       transformMixedEsModules: true,
//     }
//   },
//   server: {
//     // port: 8001, // Set the port to 8001
//     proxy: {
//       "/api/": "http://localhost:8001",
//       "/uploads/": "http://localhost:8001",
//     },
//   }
// })

