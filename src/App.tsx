import { MainRouter } from './routes';

import { AlertProvider } from './common/context';
import { AuthProvider } from './auth/common/context';


function App() {
  return (
    <AlertProvider>
      <AuthProvider>
        <MainRouter />
      </AuthProvider>
    </AlertProvider>
  )
}

export default App
