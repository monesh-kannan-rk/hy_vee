'use client'

import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Form({name, setName, details, setDetails, setShowDetailsAnimation}) {
    const[animate, setAnimate] = useState(false)
    const [isInputEmpty, setIsInputEmpty] = useState(true);
    const [error, setError] = useState(false)
    
    
    const handleChange = (e) => {
        e.preventDefault()
        setName(e.target.value)
        setIsInputEmpty(name.trim() === '');
        setAnimate(false);
        setError(false)
        e.currentTarget.disabled = false;
        if(!isInputEmpty){
          setShowDetailsAnimation(false)
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
          setAnimate(true);
          const ageResp = (await fetch(`https://api.agify.io/?name=${name}`))
          const genderResp = (await fetch(`https://api.genderize.io/?name=${name}`))
          const nameResp = (await fetch(`https://api.nationalize.io/?name=${name}`))

          const named = await nameResp.json()
          const age = await ageResp.json()
          const gender = await genderResp.json()
          var updatedName = named?.name || name
          if(named?.error){
            toast('Request limit reached')
            setError(true)
          }
          // console.log(details, { name: updatedName, age: age.age, gender: gender.gender });
          setDetails({ name: updatedName, age: age.age, gender: gender.gender });
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        
    }

    useEffect(() =>{
      handleSubmit;
    },[])
  return (
    <div>
        <div className="glass_card">
          <div className='main'>
            <h2 >Enter Details</h2>
            <hr/>
            <div className='detail_form'>
                <div className='left-field'><h3>Name</h3></div>
                <div className='right-field'><input type='text' className='' onChange={handleChange} value={name}/></div>
            </div>
            <div className='submit'>
              <button className= {`button success ${animate ? 'animate cursor-disabled': ''}`} onClick={(e) => handleSubmit(e)} disabled={isInputEmpty || animate}>Submit</button>
            </div>
            {error && <div><hr/>The following data is not retrived from remote api, It is displayed for how the card will be work when it is fetched from rest api</div>}
          </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Form