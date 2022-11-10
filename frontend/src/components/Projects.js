import React,{useState} from 'react'
import img from '../assets/img/skill-bg.jpg'
import { Fade } from "react-awesome-reveal";
export const Card =()=>{
    const[active, setActive] = useState(false)
    
    return(
        <div className={!active?'card-box':'card-box active'}
            onMouseEnter={()=>setActive(true)} 
            onMouseLeave={()=>setActive(false)}>
            <img src={img} alt="" />
            <div className="card-detail">
                <div className="detail">
                    <h3>Project name</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quibusdam.</p>
                    <button>Learn more</button>
                </div>
            </div>
        </div>
    )
}
const Projects = () => {
    
    return (
        <section className='project' id='project'>
            <Fade direction='left' duration={1500}>
                <h1 className="heading">recent <span>projects</span></h1>
            </Fade>
            
                <div className="card-container">
                    <Fade direction='right' cascade >
                        <Card/>
                        <Card/>
                        <Card/>
                    </Fade>
                </div>
            
           
        </section>
    )
}

export default Projects