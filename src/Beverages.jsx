import './App.css';
import React, { useState } from "react";
import PriceList from './component/PriceList';
const Beverages=()=>{
    const teaList=[{name:'Black Tea',cost:10},{name:'Tea',cost:10}];
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
        <div className="menuItems">
            <button onClick={()=>showOrNot(0)}>
                TEA
            </button>
                {valChanged?(val[0]?<PriceList values={teaList}></PriceList>:null):console.log("not chnaged")}
        </div>
        <div>
            <button onClick={()=>showOrNot(1)}>
                COFFEE
            </button>
                {valChanged?(val[1]?<h2>yo1</h2>:null):console.log("not chnaged")}
        </div>
        <div>
            <button onClick={()=>showOrNot(2)}>
                COLD DRINK
            </button>
                {valChanged?(val[2]?<h2>yo2</h2>:null):console.log("not chnaged")}
        </div>
    
    </div>;
}
export default Beverages;