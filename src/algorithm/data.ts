export const sortingAlgorithms:string[]=["Selection Sort","Bubble Sort","Insertion Sort","Merge Sort","Heap Sort"];
export const sortingSpeed:string[]=["Fast","Mid","Slow"];
export const DEFAULT_SIZE:number = 70;

export type sortingFunction = (arr:number[])=>animation[];
export type animation = { i:number,j:number,updatedArray:number[]}