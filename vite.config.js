import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import dynamicImport from 'vite-plugin-dynamic-import';

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const aliases = ['api', 'components', 'helpers', 'styles'];

const resolveAliasPath = (aliasPath) => path.resolve(__dirname, aliasPath);

const fullSha = process.env.GITHUB_SHA || '';
const versionFolder = fullSha.slice(0, 7);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname, '');

  const defineEnv = Object.entries(env).reduce((acc, [key, val]) => {
    acc[`import.meta.env.${key}`] = JSON.stringify(val);
    return acc;
  }, {});

  return {
    base: './',
    publicDir: 'public',
    cacheDir: 'node_modules/.vite',
    define: {
      global: 'window',
      ...defineEnv,
    },
    plugins: [
      react(),
      dynamicImport(),
      ViteEjsPlugin({
        TITLE: env.BRAND || '',
        APP_VERSION: versionFolder,
      }),
    ],
    server: {
      host: true,
      port: 9999,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 5173,
      },
      fs: { allow: ['..'] },
    },
    build: {
      target: 'esnext',
      sourcemap: false,
      minify: 'terser',
      cssCodeSplit: true,
      commonjsOptions: { transformMixedEsModules: true },
      rollupOptions: {
        external: ['/config.js'],
        output: {
          entryFileNames: `version-${versionFolder}/scripts/[hash].js`,
          chunkFileNames: `version-${versionFolder}/scripts/[hash].js`,
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'modules';
            }
          },
          assetFileNames: (assetInfo) => {
            const ext = assetInfo.name?.split('.').pop()?.toLowerCase();
            if (ext === 'svg') {
              return `version-${versionFolder}/icons/[hash][extname]`;
            }
            if (/(png|jpe?g|gif|webp|avif)/.test(ext)) {
              return `version-${versionFolder}/images/[hash][extname]`;
            }
            if (/(woff2?|ttf|eot)/.test(ext)) {
              return `version-${versionFolder}/fonts/[hash][extname]`;
            }
            if (ext === 'css') {
              return `version-${versionFolder}/styles/[hash][extname]`;
            }
            if (assetInfo.name?.endsWith('.worker.js')) {
              return `version-${versionFolder}/workers/[name].[hash][extname]`;
            }
            if (ext === 'wasm') {
              return `version-${versionFolder}/wasm/[hash][extname]`;
            }
            if (ext === 'json' || ext === 'webmanifest') {
              return `version-${versionFolder}/misc/[hash][extname]`;
            }
            if (/(mp4|webm|mp3|wav)/.test(ext)) {
              return `version-${versionFolder}/media/[hash][extname]`;
            }
            return `version-${versionFolder}/assets/[hash][extname]`;
          },
        },
      },
    },
    resolve: {
      preserveSymlinks: true,
      alias: {
        ...aliases.reduce((acc, alias) => {
          acc[`#${alias}`] = resolveAliasPath(`src/${alias}`);
          return acc;
        }, {}),
      },
    },
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.woff2'],
  };
});
