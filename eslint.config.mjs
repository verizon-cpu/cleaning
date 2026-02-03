import { fileURLToPath } from 'url'
import path from 'path'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.FlatConfig[]} */
const eslintConfig = [
  ...compat.config({
    extends: ['next', 'next/core-web-vitals'],
    rules: {
      // Disable all problematic rules
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off',
      'react-hooks/exhaustive-deps': 'warn',
    },
  }),
]

export default eslintConfig