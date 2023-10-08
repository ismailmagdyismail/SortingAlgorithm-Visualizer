import {animation, sortingFunction} from "./data.ts";

const waitTime:Record<string,number> = {
    "fast":0.01,
    "mid":0.05,
    "slow":0.1,
}
const algorithm:Record<string, sortingFunction>={
    "selectionsort":selectionSort,
}

export function generateRandomArray(size:number):number[]{
    return Array.from({length:size},()=> Math.floor(Math.random()*70));
}
export function selectionSort(array:number[]):animation[]{
    const animations = [];
    for(let i =array.length-1 ;i>=0;i--){
        let mx = array[i];
        let mxIdx = i ;
        for(let j = i-1;j>=0;j--){
            animations.push({
                i,
                j,
                updatedArray:[...array],
            });
            if(array[j] < mx){
                mx = array[j];
                mxIdx = j;
            }
        }
        array[mxIdx] = array[i];
        array[i] = mx;
    }
    return animations || [];
}

export function getWaitTime(speed:string):number{
    return  waitTime[speed.toLowerCase()] || waitTime["fast"];
}
export function executeSort(sortingAlgorithm:string,array:number[]){
    return algorithm[sortingAlgorithm.toLowerCase().split(' ').join('')](array);
}