import React from "react"
import "./index.css";

function Day_date()
{
    const date = new Date();
    const showTime = date.getHours()
    + ':' + date.getMinutes()
    + ':' + date.getSeconds();

    return (
        <>
         <div className="date_edit">
           
            <h2> { showTime } </h2>
            
         </div>
        </>
    )
}

export default Day_date;