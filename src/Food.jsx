
import React, { useState } from "react";

const Food=()=>{
    
    const [valChanged,SetvalChanged]=useState(0);
    const [val,Setval]=useState([false,false,false]);
    const showOrNot=(i)=>{
        console.log(val);
        let temp=val;
        temp[i]=!temp[i];
        Setval(temp);
        SetvalChanged(valChanged+1);        
    }

    return <div className="menu">
        <div>
            <button onClick={()=>showOrNot(0)}>
                INDIAN SNACKS COUNTER
            </button>
                {valChanged?(val[0]?<h2>yo</h2>:null):console.log("not chnaged")}
        </div>
        <div>
            <button onClick={()=>showOrNot(1)}>
                SNACKS COUNTER
            </button>
                {valChanged?(val[1]?<h2>yo1</h2>:null):console.log("not chnaged")}
        </div>
        <div>
            <button onClick={()=>showOrNot(2)}>
                INDIAN SNACKS COUNTER
            </button>
                {valChanged?(val[2]?<h2>yo2</h2>:null):console.log("not chnaged")}
        </div>
    
    </div>;
}
export default Food;