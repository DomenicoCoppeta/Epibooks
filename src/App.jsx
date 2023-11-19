import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import AllTheBooks from "./Components/AllTheBooks";
import BookDetails from "./Components/BookDetails";
import ThemeContext from './Contexts/theme';
import { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const currentTheme = localStorage.getItem('theme')
  console.log(currentTheme)

  const [searchTerm, setSearchTerm] = useState('')
  const [theme, setTheme] = useState(currentTheme)


  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
 

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);


  return (
    <BrowserRouter>
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className={`${theme} App`}>  
      <NavBar setSearchTerm={setSearchTerm} theme={theme} setTheme={setTheme}/>
      <Routes >
        <Route path="/" element={<AllTheBooks searchTerm={searchTerm}/>}/>
        <Route path="/books/:asin" element={<BookDetails/>}/>
      </Routes>
      <MyFooter/>
      <ToastContainer position="bottom-right" />
    </div>
    </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
