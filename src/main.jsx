import React from 'react';
import Dollar from './pages/Dollar';
import Compare from './pages/Compare';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate, // Import the useNavigate hook
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dollar',
    element: <Dollar />,
  },
  {
    path: '/compare',
    element: <Compare />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    {/* Render your app */}
    <AppWrapper />
  </RouterProvider>
);

function AppWrapper() {
  const navigate = useNavigate(); // Get the navigate function

  // Define the handleClick function to navigate to the /dollar page
  const handleClick = () => {
    navigate('/dollar');
  };

  return (
    <App handleClick={handleClick} /> // Pass handleClick as a prop to your App component
  );
}
