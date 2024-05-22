import { config } from '@vue/test-utils'
import { vi } from 'vitest'

config.global.mocks = {
  $t: (msg: string) => msg,
  $tc: (msg: string) => msg,
  $n: (msg: string) => msg,
  $d: (msg: string) => msg
}

vi.mock('vue-router', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    useRouter: () => ({
      push: vi.fn()
    }),
    useRoute: () => ({
      params: {}
    })
  }
})
