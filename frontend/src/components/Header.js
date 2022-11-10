import logo from '../assets/img/logo.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaBars, FaGithub,FaFacebook, FaLinkedin } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'
function Header() {
  const [ scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(false)
  useEffect(()=>{
    let scroll = ()=>{
      if(window.scrollY>50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }
    window.addEventListener('scroll',scroll)
    return ()=> window.removeEventListener('scroll', scroll)
  },[])
  return (
    <header className={scrolled?'header scrolled':'header'}>
        <HashLink smooth to="/#banner" className='logo'>
            <img src={logo} alt=""/>  
        </HashLink>
        
        
        <nav className={active?"navbar active":'navbar'}>
          <HashLink smooth to='/#banner'>Home</HashLink>
          <HashLink smooth to='/#skill'>Skills</HashLink>
          <HashLink smooth to='/#project'>Project</HashLink>
          <HashLink smooth to='/#contact'>Contact</HashLink>
          
        </nav>
        <div className="icons">
          <div id="facebook"><FaFacebook/></div>
          <div id="github"><FaGithub/></div>
          <div id="linkedin"><FaLinkedin/></div>
          <div id="menu-btn" onClick={()=>setActive(!active)}><FaBars/></div>
        </div>
    </header>
  );
}

export default Header;