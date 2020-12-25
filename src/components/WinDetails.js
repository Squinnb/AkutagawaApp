import React, {useState, useEffect} from 'react';
import '../app.css';
import axios from "axios"

export default function WinDetails(props) {
    const {no, year, name, title} = props.winner
    const [titleInfo, setInfo] = useState(null)

    
     useEffect( () => {
         
      let resp = fetch("https://www.goodreads.com/book/title.FORMAT", {"key": "lzhHXUd9kUpum244vufV2Q",  "title": title})
                    .then(response => {
                        response.json().then( (data) => {console.log(data)}).catch((e) => {console.log("inner catch error: ", e)})})
                    .catch((e) => {console.log("Last catch error: ", e)})
          
        
    }, [])
    
    

    return (

        <div className="detailBox">
            <div className="flex">
                <h2 className="sameLine">
                    {no}
                </h2>
                <h2  className="sameLine slRight">
                    {year}
                </h2>
            </div>
            

           <div>
           作家： {name} <br/>
           受賞作： {title}
           </div>
            
         
                 
           
        </div>
    )
}