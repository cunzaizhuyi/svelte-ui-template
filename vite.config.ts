import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'
import path from 'path';
import { extractorSvelte } from '@unocss/core'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const common = {
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, '/src') },
      ],
    },
  };

  if (command === 'serve') {
    return {
      plugins: [
        Unocss({
          extractors: [extractorSvelte],
        }),
        svelte({}),
      ],
      ...common,
    }
  }

  if (command === 'build') {
    return {
      ...common,
      plugins: [
        Unocss({
          extractors: [extractorSvelte],
          mode: 'svelte-scoped',
        }),
        svelte({}),
      ],
      build: {
        cssCodeSplit: true,
        lib: {
          entry: path.resolve(__dirname, 'src/lib/index.ts'),
          name: 'MyLib',
          fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
          // 确保外部化处理那些你不想打包进库的依赖
          // external: ['unocss'],
          output: {
            // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
            // globals: {
            //   unocss: 'unocss'
            // }
          }
        }
      }
    }
  }

})
