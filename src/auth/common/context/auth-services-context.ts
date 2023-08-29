import { createContext } from 'react';

import { AuthServices } from '../services';


export const AuthServicesContext = createContext<AuthServices | null>(null);
