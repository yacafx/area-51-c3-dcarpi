import { Authenticate, User } from '@dc/models';

export const adminUserCredentials: Authenticate = {
  username: 'admin',
  password: '123'
};

export const adminSuccessLogin: Omit<User, 'password'> = {
  id: 3,
  username: 'admin',
  country: 'usa',
  role: 'admin',
  token: 'admin-token'
};
