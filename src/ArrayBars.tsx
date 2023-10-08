import React from "react";
import Bar from "./Bar.tsx";
interface ArrayBarsProps{
    arrayData:number[];
    primaryIndex:number;
    secondaryIndex:number;
}
const ArrayBars:React.FC<ArrayBarsProps> = (props)=>{
    return(
        <div className="bars-container">
            {props.arrayData.map((number,i)=>
                <Bar
                    numberValue={number}
                    key={i}
                    primaryIndex={props.primaryIndex}
                    secondaryIndex={props.secondaryIndex}
                    id={i}
                />)
            }
        </div>
    )
}
export default ArrayBars;