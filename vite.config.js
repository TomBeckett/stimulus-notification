import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'netlify') {
    return {}
  }

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'StimulusNotification',
        fileName: 'stimulus-notification'
      },
      rollupOptions: {
        external: ['stimulus-use', '@hotwired/stimulus'],
        output: {
          globals: {
            '@hotwired/stimulus': 'Stimulus',
            'stimulus-use': 'useTransition'
          }
        }
      }
    }
  }
})
