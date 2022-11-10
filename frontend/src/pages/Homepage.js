import React from 'react'

import Banner from '../components/Banner'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Homepage = () => {
  return (
    <div >
        <Banner/>
        <div id="home-content">
          <Skill/>
          <Projects/>
          <Contact/>
        </div>
    </div>
  )
}

export default Homepage