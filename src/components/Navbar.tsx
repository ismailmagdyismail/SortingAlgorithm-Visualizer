import React from 'react';
import {sortingAlgorithms, sortingSpeed} from "../algorithm/data.ts";
interface NavbarProps{
    handleReset():void;
    handleStart():void;
    generateArray():void;
    setSpeed:React.Dispatch<React.SetStateAction<string>>;
    setAlgorithm:React.Dispatch<React.SetStateAction<string>>;
    setSize:React.Dispatch<React.SetStateAction<number>>;
    speed:string;
    algorithm:string;
    size:number;
}
const Navbar:React.FC<NavbarProps> = (props)=>{
    return(
        <nav className="nav-bar">
            <div className="sort-settings">
                <label>Size</label>
                <input
                    value={props.size}
                    type="number"
                    onChange={(event)=>props.setSize(+event.target.value)}
                    min={10}
                    max={70}
                />
            </div>
            <div className="sort-settings">
                <label>Speed</label>
                <select value={props.speed} onChange={(event)=>props.setSpeed(event.target.value)}>
                    {sortingSpeed.map((speed,i) => <option value={speed} key={i}>{speed}</option>)}
                </select>
            </div>
            <div className="sort-settings">
                <label>Sorting-Algorithm</label>
                <select value={props.algorithm} onChange={(event)=>props.setAlgorithm(event.target.value)}>
                    {sortingAlgorithms.map((algorithm,i)=><option value={algorithm} key={i}>{algorithm}</option>)}
                </select>
            </div>
            <button onClick={()=>props.generateArray()}>Generate Array</button>
            <button onClick={()=>props.handleReset()}>Reset</button>
            <button onClick={()=>props.handleStart()}>Start Sorting</button>
        </nav>
    )
};
export default Navbar;
