import React, { useState } from 'react'
import "./MainApp.css"
import logo from "../images/MSPLogo.svg"
import emoji1 from "../images/Emoji1.png"
import emoji2 from "../images/Emoji2.png"
import emoji3 from "../images/Emoji3.png"
import emoji4 from "../images/Emoji4.png"
import image1 from "../images/mainImage.png"
import Emotions from '../Emotions/Emotions'
import Record from "../Record/Record"
const MainApp =() =>{
    const images=[emoji1,emoji2,emoji3,emoji4]
    const[records, setRecords]= useState([]);

    const deletebtn =(e,deletedIndex) =>{
      

        setRecords(  records.filter((obj, idx)=> deletedIndex !== idx))
    }

    // const records =[];
    const recordData = ()=>{
    const text = document.getElementsByTagName("input")[0];
    const emoji= document.querySelector("input[type='radio']:checked");
    if(text.value && emoji){
      const y =  [...records,{text : text.value , emoji: images[emoji.value]}]
       
      setRecords(y)
        //records.push({text: text , emoji: images[emoji.value]});
        text.value = "";
        emoji.checked = false;
    }
    else{
        alert("Please Fill All Data")
    }
   console.log(records);
};
    return(
        <>
        <header>
        <div className="logo">
            <img src={logo}/>
        </div>
        <h1 className="header">RECORDING FEELINGS</h1>
        </header>
        <main>
        <section className='first-section'>
            <input type='text' placeholder='Write your feelings here'></input>
            <div className='AllElements'>
           <div >
                <h2>Select Emoji</h2>
                <div className='emojis'>
                  <Emotions images={images}/>
                  
                </div>
            </div>
          <button onClick={recordData}>Record</button>
          </div>

          <div className='mainimage'>
             <img src={image1}/>
          </div>
        </section>
        
          <section className='second-section'>
        
        <Record list={records} deleteFunction={deletebtn}/>
        </section> 
        </main>
        </>
    )
}
export default MainApp