import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme/AppTheme';

function JornalApp() {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
}

export default JornalApp;
