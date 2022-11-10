import React from 'react'
// import skillImg from '../assets/img/skill-img.png'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { CSS, Django, DRF, HTML, JS, Postgres, Python, ReactI} from '../assets/img/index'
import { Fade } from "react-awesome-reveal";


export const SkillBox = ({pic, title}) => {
  return (
    <div className='skill-card'>
        <div className="card-header">
            <img src={pic} alt="" />
        </div>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <span className="experience">1 year experience</span>
            <ul className="knowledge">
                <Fade direction='right' cascade duration={500}>
                    <li>Lorem.</li>
                    <li>Lorem.</li>
                    <li>Lorem.</li>
                    <li>Lorem.</li>
                    <li>Lorem.</li>
                </Fade>
            </ul>
        </div>
    </div>
  )
}


const Skill = () => {
    
    return (
        <section className='skill' id='skill'>
            <Fade direction='down' duration={1500}>
            <h1 className="heading">What <span>I do</span></h1>
            
            </Fade>
           
            <div className="row">
                <div className="card-wrapper">
                    <Fade direction='right' cascade duration={500}>
                        <SkillBox pic={HTML} title={'HTML'}/>
                        <SkillBox pic={CSS} title={'CSS'}/>
                        <SkillBox pic={JS} title={'Javascript'}/>
                        <SkillBox pic={ReactI} title={'React'}/>
                        <SkillBox pic={Django} title={'Django'}/>
                        <SkillBox pic={DRF} title={'CSS'}/>
                        <SkillBox pic={Python} title={'Python'}/>
                        <SkillBox pic={Postgres} title={'Postgres'}/>
                    </Fade>
                </div>
                
            </div>
            
        </section>
  )
}

export default Skill