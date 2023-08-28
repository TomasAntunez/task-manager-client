import { GetAuthResponse, LoginResponse, RegisterResponse } from './auth-response-schemas';


export const registerResponse: RegisterResponse = {
  id: '2b103fb1-2889-4faf-910d-cc8f8fa6e369',
  username: 'Test',
  email: 'test@test.com',
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.LU2HFmHABlTZp5zykBfgLAAp16n4vmuvHvPPxoXZa2c'
}

export const loginResponse: LoginResponse = { ...registerResponse };

export const getAuthResponse: GetAuthResponse = { ...registerResponse };
