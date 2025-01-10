import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/svelte'
// impwort "@testing-library/jest-dom/vitest";

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})

// import { config } from '@some-testing-lib'

// if (!globalThis.defined) {
//   config.plugins = [myCoolPlugin]
//   computeHeavyThing()
//   globalThis.defined = true
// }

// // hooks are reset before each suite
// afterEach(() => {
//   cleanup()
// })

// globalThis.resetBeforeEachTest = true
