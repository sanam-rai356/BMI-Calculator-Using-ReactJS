import React, { useRef, useState } from 'react'

const BMI = () => {
    const[weight,setWeight] = useState();
    const[height,setHeight] = useState();
    const[BMI, setBMI] = useState("");
    const[Message, setMessage] = useState("");
    const HeightClear = useRef();
    const WeightMessage= useRef();

    const CalcBMI=(e)=>{
        e.preventDefault();
        if(weight===0 && height===0){
            alert("please enter valid weight and height")
        }else{
            let TotalHeight= height*height
            let bmi = weight/TotalHeight;
            bmi = Math.floor(bmi);
            setBMI(bmi);
            if(bmi<18){
                setMessage("You are underweight");
            }else if(bmi>=18 && bmi<=24){
                setMessage("You are healthy");
            }else if(bmi>=25 && bmi<=30){
                setMessage("You are Overweight");
            }else{
                setMessage("Obesity")
            }
        }
    }

    const reloadbtn=(e)=>{
        e.preventDefault();
        HeightClear.current.value="";
        WeightMessage.current.value="";
    }
  return (
    <>
      <div className="container">
        <h1>BMI CALCULATOR</h1>
        <form>
            <div>
                <label>Enter Weight (KG)</label>
                <input ref={WeightMessage} type="text" placeholder='Enter Weight (KG)' value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
            </div>

            <div>
                <label>Enter Height (METER)</label>
                <input ref={HeightClear} type="text" placeholder='Enter Height (METER)' value={height} onChange={(e)=>{setHeight(e.target.value)}}/>
            </div>

            <div className='formBtn'>
                <button className="btn" type='submit' onClick={CalcBMI}>Submit</button>
                <button className="btn btn-active" onClick={reloadbtn} type='submit'>Reload</button>
            </div>

            <div className="center">
                <h3>Your BMI is : {BMI}</h3>
                <p>{Message}</p>
            </div>
        </form>
      </div>
    </>
  )
}

export default BMI;
