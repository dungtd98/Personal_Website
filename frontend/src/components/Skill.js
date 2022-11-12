import React,{useState, useEffect} from 'react'

import { Fade } from "react-awesome-reveal";
import API from '../ultis/API'

export const SkillBox = ({skill}) => {
    const[skillKnowledge, setSkillKnowledge] = useState(null)
    useEffect(()=>{
        let handleKnowledge = ()=>{
            let data = skill.knowledge.split(/,|['/']|['|']|[\\]/)
            setSkillKnowledge(data)
        }
        handleKnowledge()//eslint-disable-next-line
    },[])
    return (
        <div className='skill-card'>
            <div className="card-header">
                <img src={skill.img} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{skill.name}</h2>
                <span className="experience">{skill.exp} experience</span>
                <ul className="knowledge">
                    <Fade direction='right' cascade duration={500}>
                        {skillKnowledge?.map((item, index)=>(
                            <li key={index}>{item}</li>
                        ))}
                    </Fade>
                </ul>
            </div>
        </div>
    )
}


const Skill = () => {
    const [skills, setSkills] = useState(null)
    useEffect(()=>{
        let getSkills = async()=>{
            try{
                let resp = await API.get('/skills/')
                setSkills(resp.data)
                
            }catch(error){

            }
        }
        getSkills()
    },[])
    return (
        <section className='skill' id='skill'>
            <Fade direction='down' duration={1500}>
            <h1 className="heading">What <span>I do</span></h1>
            
            </Fade>
           
            <div className="row">
                <div className="card-wrapper">
                    <Fade direction='right' cascade duration={500}>
                        {skills?.map((item, index)=>(
                            <SkillBox key={index} skill={item}/>
                        ))}
            
                    </Fade>
                </div>
                
            </div>
            
        </section>
  )
}

export default Skill