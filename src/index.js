import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { LibraryProvider } from './context/LibraryContext';
import App from './App';
import { ToggleProvider } from './context/ToggleContext';
import { ScrollProvider } from './context/ScrollContext';
import { AuthProvider } from './context/AuthContext';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <ScrollProvider>
          <LibraryProvider>
            <ToggleProvider>
              <App />
            </ToggleProvider>
          </LibraryProvider>
        </ScrollProvider>
      </Router>
    </AuthProvider>
  </StrictMode>,
  rootElement
);
