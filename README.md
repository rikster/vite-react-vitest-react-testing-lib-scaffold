# Tech

- Vite
- Typescript
- Vitest
  - Uses Jest syntax
- React Testing Library
  - Testing React components

# Setup

Scaffold with Vite (React/Typecript)

```
npm create vite@latest
```

Install Vitest

```
npm install vitest --save-dev
```

Update Package.json
(npm run test)

```
 "test": "vitest"
```

Setup React Testing Library to test React components

```
npm install jsdom --save-dev
```

Update Vite configuration file:

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
});
```

Install React Testing Library on the command line:

```
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

Add a test setup file in tests/setup.ts and give it the following implementation

```
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
 cleanup();
});
```
And last, include this new test setup file in Vite's configuration file. In addition, make all imports from Vitest global, so that you don't need to perform these imports (e.g. expect) in each file manually anymore:

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
```
