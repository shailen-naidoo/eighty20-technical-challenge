import { describe, expect, test, vi } from "vitest";
import axios from 'axios'
import { LoginViewModel } from "./vm";

vi.mock('axios')
vi.mock('react-router-dom')

describe('Test LoginViewModel', () => {

  describe('Edge cases', () => {

    test('If user is not authenticated then should not navigate to home page', async () => {
      // 1. SETUP
      axios.get.mockRejectedValueOnce({ data: { is_authenticated: false, user: null }})
      const navigateSpy = vi.fn()

      // 2. ACTION
      const isAuthenticatedCall = LoginViewModel.methods.isAuthenticated({ navigate: navigateSpy })

      // 3. ASSERT
      await expect(isAuthenticatedCall)
        .rejects
        .toEqual({ data: { is_authenticated: false, user: null }})
      expect(navigateSpy).toBeCalledTimes(0)
    })
  })

  describe('Happy cases', () => {

    test('If user is authenticated then should navigate to home page', async () => {
      // 1. SETUP
      axios.get.mockResolvedValueOnce({ data: { is_authenticated: true, user: {} }})
      const navigateSpy = vi.fn()

      // 2. ACTION
      await LoginViewModel.methods.isAuthenticated({ navigate: navigateSpy })

      // 3. ASSERT
      expect(navigateSpy).toBeCalledTimes(1)
      expect(navigateSpy).toHaveBeenNthCalledWith(1, '/')
    })
  })
})