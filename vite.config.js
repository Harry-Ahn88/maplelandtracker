import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'vite-plugin-javascript-obfuscator'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // production 빌드에서만 난독화 (dev는 빠르고 읽기 쉽게)
    obfuscator({
      apply: 'build',
      options: {
        compact: true,
        controlFlowFlattening: false,
        deadCodeInjection: false,
        identifierNamesGenerator: 'hexadecimal',
        renameGlobals: false,
        selfDefending: false,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.75,
        transformObjectKeys: false,
        unicodeEscapeSequence: false,
      },
    }),
  ],
  base: process.env.NODE_ENV === 'production' ? '/maplelandtracker/' : '/',
})
