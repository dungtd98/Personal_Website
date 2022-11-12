import React from 'react'
import { FaUser, FaEnvelope,FaPhone } from 'react-icons/fa'
import { Slide, Fade } from "react-awesome-reveal";
import API from '../ultis/API';


const Contact = () => {
    
    let submit = async (e)=>{
        e.preventDefault()
        try{
            await API.post('/contacts/',{
                "name":e.target.name.value,
                "email":e.target.email.value,
                "phone":e.target.number.value,
            })
            alert('Submit succesfully!! I will contact you soon.')
        }catch(error){
            console.log(error)
        }
    }
  return (
    <section className='contact' id='contact'>
        <Slide direction='down'>
        <h1 className="heading"><span>Contact</span> me</h1>
        </Slide>
        <Fade duration={2000}>
        <div className="row">
            <div className="image">
                {/* <img src={img} alt="" /> */}
            </div>
            <form action="" onSubmit={submit}>
                <h3>get in touch</h3>
                <div className="input-box">
                    <span><FaUser/></span>
                    <input type="text" name='name' placeholder='Your name...'/>
                </div>
                <div className="input-box">
                    <span ><FaEnvelope/></span>
                    <input type="email" name='email' placeholder='Email name...'/>
                </div>
                <div className="input-box">
                    <span><FaPhone/></span>
                    <input type="text" name='number' placeholder='Your number...'/>
                </div>
                <input type="submit" value="Contact now" className='btn'/>
            </form>
        </div>
        </Fade>
    </section>
  )
}

export default Contact