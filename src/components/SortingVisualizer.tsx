import Navbar from "./Navbar.tsx";
import ArrayBars from "./ArrayBars.tsx";
import {useState} from "react";
import {DEFAULT_SIZE, sortingAlgorithms, sortingSpeed} from "../algorithm/data.ts";
import {executeSort, generateRandomArray, getWaitTime} from "../algorithm/algorithms.ts";

function SortingVisualizer(){
    const [speed,setSpeed] = useState<string>(sortingSpeed[0]);
    const [algorithm,setAlgorithm] = useState<string>(sortingAlgorithms[0]);
    const [array,setArray] = useState<number[]>([]);
    const [size,setSize] = useState<number>(DEFAULT_SIZE);
    const [primaryIndex,setPrimaryIndex] = useState<number>(-1);
    const [secondaryIndex,setSecondaryIndex] = useState<number>(-1);
    const [sorted,setSorted] = useState<number[]>([]);
    function handleReset():void{
        setSpeed(sortingSpeed[0]);
        setAlgorithm(algorithm[0]);
        setSize(DEFAULT_SIZE);
        setArray([]);
        setPrimaryIndex(-1);
        setSecondaryIndex(-1);
    }
    // useEffect(()=>{
    //     if(isSorting){
    //         sort();
    //     }
    // },[isSorting])
    function handleStart():void{
        sort();
    }
    async function sort(){
        const movements = executeSort(algorithm,[...array]);
        for(let i = 0  ;i<movements.length;i++){
            setPrimaryIndex(movements[i].i);
            setSecondaryIndex(movements[i].j);
            setSorted([...sorted,movements[i].i]);
            setArray([...movements[i].updatedArray]);
            await wait(getWaitTime(speed))
        }
    }
    function generateArray():void{
        // setIsSorting(false);
        setArray([]);
        setPrimaryIndex(-1);
        setSecondaryIndex(-1);
        const randomArray:number[] = generateRandomArray(size);
        setArray([...randomArray]);
    }
    return(
        <>
            <Navbar
                handleReset={handleReset}
                handleStart={handleStart}
                speed={speed}
                setSpeed={setSpeed}
                algorithm={algorithm}
                setAlgorithm={setAlgorithm}
                generateArray={generateArray}
                size={size}
                setSize={setSize}
            />
            <ArrayBars
                arrayData={array}
                primaryIndex={primaryIndex}
                secondaryIndex={secondaryIndex}
            />
        </>
    )
}
async function wait(time:number){
    return new Promise((resolve ,)=> {
        setTimeout(resolve,time*1000);
    });
}
export default SortingVisualizer;