import { api } from './api';

export const authService = {
  async login(email, password) {
    try {
      const response = await api.post('/auth/login', { email, password });
      return {
        user: response.data.user,
        token: response.data.token
      };
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao fazer login');
    }
  },

  async register(name, email, password) {
    try {
      await api.post('/auth/register', { name, email, password });
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao registrar');
    }
  },

  async logout() {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao fazer logout');
    }
  },

  async getProfile() {
    try {
      const response = await api.get('/auth/me');
      return response.data.user;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Erro ao carregar perfil');
    }
  }
};