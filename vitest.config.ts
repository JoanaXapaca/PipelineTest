import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

// Merge Vite config with Vitest-specific test config
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      // Use jsdom to simulate a browser-like environment
      environment: 'jsdom',
      // Exclude e2e folder from unit tests
      exclude: [...configDefaults.exclude, 'e2e/**'],
      // Project root
      root: fileURLToPath(new URL('./', import.meta.url)),
      // Coverage configuration
      coverage: {
        // Istanbul is used instead of v8 (v8 has a known bug with Vue files)
        provider: 'istanbul',
        // Only include source files
        include: ['src/**/*.{vue,ts,js}'],
        // Exclude entry point and test files
        exclude: ['src/main.ts', 'src/**/*.spec.ts'],
        // Generate text output and lcov report (for SonarQube)
        reporter: ['text', 'lcov'],
        // Ensure the lcov.info is written to the correct path
        reportsDirectory: './coverage',
      },
    },
  }),
)