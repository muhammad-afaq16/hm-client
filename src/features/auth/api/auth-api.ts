import { api } from '@/lib/axios';
import { ForgotPasswordPayload, LoginPayload, RegisterPayload, ResetPasswordPayload } from '../types';

export const loginUser = async (payload: LoginPayload) => {
  const { data } = await api.post('/auth/login', payload);
  return data;
};

export const registerUser = async (payload: RegisterPayload) => {
  const { data } = await api.post('/auth/register', payload);
  return data;
};

export const forgotPassword = async (payload: ForgotPasswordPayload) => {
  const { data } = await api.post('/auth/forgot-password', payload);
  return data;
};

export const resetPassword = async ({
  token,
  newPassword,
}: ResetPasswordPayload) => {
  const { data } = await api.post(`/auth/reset-password/${token}`, {
    newPassword,
  });

  return data;
};

export const logoutUser = async () => {
  const { data } = await api.post('/auth/logout');
  return data;
};

export const refreshToken = async () => {
  const { data } = await api.post('/auth/refresh');
  return data;
};
