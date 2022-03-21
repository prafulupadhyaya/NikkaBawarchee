
import React, { useState } from "react";

const PriceList=(props)=>{
    
    return <div className="menuInside">
       <table className="menuTable">

           <tbody>
            {/* <tr>
                <th>Black Tea</th>
                <td>Rs. 10/-</td>
            </tr>
            <tr>
                <th>Tea</th>
                <td>Rs. 15/-</td>
            </tr> */}
           
            
            {props.values.map((a,i)=>( <tr key={i}><th>{a.name}</th><td>Rs.{a.cost}/-</td></tr>))}
            </tbody>
       </table>
    </div>;
}
export default PriceList;