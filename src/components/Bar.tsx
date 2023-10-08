import React from "react";
interface BarProps{
    numberValue:number;
    primaryIndex:number;
    secondaryIndex:number;
    id:number
}
export const Bar:React.FC<BarProps> = (props)=>{
    const style = {
        height:`${props.numberValue*10}px`,
        backgroundColor:`background-color: #26FFCB`,
    }
    const className = `bar ${props.id > props.primaryIndex && props.primaryIndex !== -1 && 'sorted' || props.id === props.primaryIndex && 'primary' || props.id === props.secondaryIndex && 'secondary'}`
    return(
        <div
            className={className}
            id={String(props.id)}
            style={style}
        >
        </div>
    )
};

export default Bar;