import { MainRouter } from './routes';

import { AuthProvider } from './auth/common/context';


function App() {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  )
}

export default App
