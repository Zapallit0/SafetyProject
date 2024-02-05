import React,{useState} from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import MainPage from './Components/MainPage/MainPage.jsx';
import AboutUs from './Components/AboutUs/AboutUs.jsx';
import Services from './Components/Services/Services.jsx'; 
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
const App = () => {
  const[theme,setTheme]=useState('light');
  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <MainPage />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App