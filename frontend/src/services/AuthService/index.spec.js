import { beforeEach, describe, expect, test, vi } from 'vitest'
import axios from 'axios'
import { AuthService } from '.'

vi.mock('axios')

beforeEach(vi.resetAllMocks)

describe('Test AuthService', () => {

  describe('.login', () => {

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

  describe('.logout', () => {

    describe('Edge cases', () => {

      test('If the logout method fails should raise an error at the call site', async () => {
          // 1. SETUP
          axios.get.mockRejectedValueOnce(new Error('Something broke on the server'))

          // 2. SETUP
          const authLogoutCall = AuthService.logout()

          // 3. ASSERT
          await expect(authLogoutCall)
            .rejects
            .toEqual(new Error('Something broke on the server'))
      })
    })

    describe('Happy cases', () => {

      test('If the logout method passes should return an OK status', async () => {
        // 1. SETUP
        axios.get.mockResolvedValueOnce('OK')

        // 2. SETUP
        const authLogoutCall = AuthService.logout()

        // 3. ASSERT
        await expect(authLogoutCall)
          .resolves
          .toBe('OK')
      })
    })
  })

  describe('.isAuthenticated', () => {

    describe('Edge cases', () => {

      test('If the isAuthenticated method fails should raise an error at the call site', async () => {
          // 1. SETUP
          axios.get.mockRejectedValueOnce(new Error('Something broke on the server'))

          // 2. SETUP
          const authIsAuthenticatedCall = AuthService.isAuthenticated()

          // 3. ASSERT
          await expect(authIsAuthenticatedCall)
            .rejects
            .toEqual(new Error('Something broke on the server'))
      })

      test('If user is not authenticated then should return false', async () => {
        // 1. SETUP
        axios.get.mockRejectedValueOnce({ data: { is_authenticated: false, user: null } })

        // 2. SETUP
        const authIsAuthenticatedCall = AuthService.isAuthenticated()

        // 3. ASSERT
        await expect(authIsAuthenticatedCall)
          .rejects
          .toEqual({ data: { is_authenticated: false, user: null } })
      })
    })

    describe('Happy cases', () => {

      test('If the isAuthenticated method passes should return the authenticated status of the user and the user object', async () => {
        // 1. SETUP
        axios.get.mockResolvedValueOnce({ data: { is_authenticated: true, user: {} }})

        // 2. SETUP
        const authIsAuthenticatedCall = AuthService.isAuthenticated()

        // 3. ASSERT
        await expect(authIsAuthenticatedCall)
          .resolves
          .toEqual({ data: { is_authenticated: true, user: {} }})
      })
    })
  })
})