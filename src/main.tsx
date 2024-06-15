import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home.tsx';
import Projects from './Projects.tsx';
import CV from './CV.tsx';
import Contact from './Contact.tsx';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/projects', element: <Projects /> },
  { path: '/cv', element: <CV /> },
  { path: '/contact', element: <Contact/> }
]);

export const ThemeContext = React.createContext({
  theme: 'dark',
  toggleTheme: () => {}
});

const ThemeContextProvider = ({children} : {children: JSX.Element}) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  return (
    <ThemeContext.Provider value={{
      theme: theme,
      toggleTheme: () => {
        if (theme === 'light') {
          localStorage.setItem('theme', 'dark');
          setTheme('dark');
        } else {
          localStorage.setItem('theme', 'light');
          setTheme('light');
        }
      }
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router}/>
    </ThemeContextProvider>
  </React.StrictMode>,
)
