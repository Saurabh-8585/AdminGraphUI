import React, { useEffect } from 'react'
import Dashboard from './Pages/Dashboard';

const App = () => {
  useEffect(() => {
    localStorage.setItem('theme', 'dark')
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    document.querySelector('html').classList.add('dark');
    document.querySelector('html').style.colorScheme = 'dark';

    if (localStorage.getItem('sidebar-expanded') === 'true') {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, []);
  return (
    <Dashboard />
  )
}

export default App