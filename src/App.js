// Import components from React Router to enable routing in the app
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import global and page-specific stylesheets
import './App.css';
import './styles/LandingPage.css';
import './styles/aboutUs.css';

// Import the main landing page component
import Heartech from './View/heartech';

// The main App component — acts as the root of your React application
function App() {
  return (
    <>
      {/* BrowserRouter enables client-side navigation without full page reloads */}
      <BrowserRouter>
        <Routes>
          {/* Route: when user visits '/', render the Heartech component */}
          <Route path='/' element={<Heartech />} />

          {/* Future routes can be added here, such as dashboard, profile, etc. */}
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Export App so it can be rendered in index.js
export default App;

