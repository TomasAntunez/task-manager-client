import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './common/assets/index.css';
import { ThemeProvider } from './common/context';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
