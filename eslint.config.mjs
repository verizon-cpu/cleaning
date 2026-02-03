import next from 'eslint-config-next';
import tseslint from 'typescript-eslint';

// This is the standard, recommended config for Next.js 15
export default tseslint.config(
  // Apply recommended TypeScript rules
  ...tseslint.configs.recommended,
  // Apply Next.js recommended rules (this is the key fix)
  ...next.configs.recommended,
  // Your custom global ignores
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
);
