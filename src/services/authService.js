import api from '@/lib/axios';

export const authService = {
  async login(credentials) {
    const payload = {
      username: credentials.email,
      password: credentials.password,
    };
    const response = await api.post('/auth/login', payload);
    return response.data;
  },

  async getMyProfile() {
    const response = await api.get('/auth/me');
    return response.data;
  },
};
