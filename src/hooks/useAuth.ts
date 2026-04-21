'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from './useRedux';
import { loginStart, loginSuccess, loginFailure, logout as logoutAction, restoreSession } from '@/store/slices/authSlice';
import { login as loginService, register as registerService } from '@/services/authService';
import { COOKIE_TOKEN_KEY, COOKIE_USER_KEY, ROUTES } from '@/utils/constants';
import type { LoginRequest, RegisterRequest } from '@/types/auth';

export function useAuth() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user, isAuthenticated, isLoading, error } = useAppSelector((state) => state.auth);

  const login = useCallback(
    async (data: LoginRequest) => {
      dispatch(loginStart());
      try {
        const response = await loginService(data);
        dispatch(loginSuccess({ user: response.user, token: response.token }));

        // Save to cookies
        Cookies.set(COOKIE_TOKEN_KEY, response.token, { expires: 7 });
        Cookies.set(COOKIE_USER_KEY, JSON.stringify(response.user), { expires: 7 });

        // Redirect based on role
        if (response.user.role === 'admin') {
          router.push(ROUTES.ADMIN);
        } else {
          router.push(ROUTES.HOME);
        }

        return response;
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Đăng nhập thất bại';
        dispatch(loginFailure(message));
        throw err;
      }
    },
    [dispatch, router]
  );

  const register = useCallback(
    async (data: RegisterRequest) => {
      dispatch(loginStart());
      try {
        await registerService(data);
        dispatch(loginFailure('')); // Reset loading state
        router.push(ROUTES.LOGIN);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Đăng ký thất bại';
        dispatch(loginFailure(message));
        throw err;
      }
    },
    [dispatch, router]
  );

  const logoutUser = useCallback(() => {
    Cookies.remove(COOKIE_TOKEN_KEY);
    Cookies.remove(COOKIE_USER_KEY);
    dispatch(logoutAction());
    router.push(ROUTES.HOME);
  }, [dispatch, router]);

  const restoreAuth = useCallback(() => {
    const token = Cookies.get(COOKIE_TOKEN_KEY);
    const userStr = Cookies.get(COOKIE_USER_KEY);
    if (token && userStr) {
      try {
        const savedUser = JSON.parse(userStr);
        dispatch(restoreSession({ user: savedUser, token }));
      } catch {
        Cookies.remove(COOKIE_TOKEN_KEY);
        Cookies.remove(COOKIE_USER_KEY);
      }
    }
  }, [dispatch]);

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout: logoutUser,
    restoreAuth,
  };
}
