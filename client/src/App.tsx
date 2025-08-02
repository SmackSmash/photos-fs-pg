import { ThemeProvider } from './components/ui/theme-provider';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <div className='container mx-auto p-2'>
        <UsersList />
      </div>
    </ThemeProvider>
  );
};

export default App;
