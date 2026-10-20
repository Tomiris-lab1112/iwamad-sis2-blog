import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Remove rendered components after every test
afterEach(() => {
  cleanup()
})
