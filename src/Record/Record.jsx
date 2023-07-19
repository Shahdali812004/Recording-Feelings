import React from "react";
import "./Record.css"
const Record =({ list,deleteFunction }) =>{

    return(
        <>
        {
            list.map((R,idx) =>(
                <div key={idx}>
                    <img src={R.emoji}/>
                    <p> {R.text}</p>
                    <button onClick={(e) => deleteFunction(e,idx)}>Delete</button>
                </div>
            )) }
        </>
    );
};
export default Record