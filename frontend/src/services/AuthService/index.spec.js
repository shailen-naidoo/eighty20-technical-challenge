import { describe, expect, test, vi } from 'vitest'
import axios from 'axios'
import { AuthService } from '.'

vi.mock('axios')

describe('Test AuthService', () => {

  describe('Test login method', () => {

    describe('Edge cases', () => {

      test('If the login method fails it should raise an error at the call site', async () => {
        // 1. SETUP
        axios.post.mockRejectedValueOnce(new Error('Something failed at the network'))

        // 2. ACTION
        const authLoginCall = AuthService.login({ username: 'john', password: '123456' })

        // 3. ASSERT
        await expect(authLoginCall)
          .rejects
          .toEqual(new Error('Something failed at the network'))
      })
    })

    describe('Happy cases', () => {
      test('If the login method passes should return user object', async () => {
        // 1. SETUP
        axios.post.mockResolvedValueOnce({ data: { user: {} } })

        // 2. ACTION
        const authLoginCall = AuthService.login({ username: 'john', password: '123456' })

        // 3. ASSERT
        await expect(authLoginCall)
          .resolves
          .toEqual({ data: { user: {} } })
      })
    })
  })
})