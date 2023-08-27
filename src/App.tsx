import { BrowserRouter } from 'react-router-dom';

import { GlobalProvider } from './common/context';
import { MainRouter } from './routes';


function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <MainRouter />
      </GlobalProvider>
    </BrowserRouter>
  )
}

export default App
