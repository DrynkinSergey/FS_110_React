import { createRoot } from 'react-dom/client';
import App from './components/App';
import './index.css';
import 'modern-normalize';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './context/AuthProvider/AuthProvider';
import LangProvider from './context/LangProvider/LangProvider';
createRoot(document.getElementById('root')).render(
  <LangProvider>
    <AuthProvider>
      <App />
      <Toaster />
    </AuthProvider>
  </LangProvider>
);
