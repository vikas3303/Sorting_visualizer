import React from "react";
import './AlgoDescription.css'
// import heapSort from "../algorithms/HeapSort";

const AlgoDescription = ({ algo }) => {
  const algoDescriptions = {
    bubbleSort: `
      Bubble Sort is a simple sorting algorithm that repeatedly steps through 
      the list, compares adjacent elements, and swaps them if they are in the wrong order. 
      The pass through the list is repeated until the list is sorted. Although simple, 
      Bubble Sort is too slow and impractical for most problems because of its O(n²) 
      time complexity.
    `,
    
    insertionSort: `
      Insertion Sort iterates through an array, and at each iteration, 
      removes one element from the array, finds its correct location in the sorted list, 
      and inserts it there. This continues until the entire list is sorted. 
      It is an in-place, stable sorting algorithm that is efficient for small or nearly 
      sorted data but inefficient for larger datasets with O(n²) time complexity.
    `,
  
    mergeSort: `
      Merge Sort is an efficient, stable sorting algorithm that uses 
      the divide-and-conquer strategy. The algorithm works by:
      1. Dividing the unsorted list into n sublists, each containing one element.
      2. Repeatedly merging sublists to produce new sorted sublists until there is 
      only one sublist remaining, which is the sorted list.
      Merge Sort has a time complexity of O(n log n), making it efficient for large datasets.
    `,
  
    quickSort: `
      Quick Sort is an efficient, in-place sorting algorithm that is 
      typically faster than Merge Sort. However, it is not a stable sorting algorithm, 
      meaning the relative order of equal elements may not be preserved. QuickSort uses 
      the divide-and-conquer strategy, where it selects a pivot and partitions the array 
      into two smaller sub-arrays (low and high elements). It then recursively sorts the sub-arrays.
    `,
  
    selectionSort: `
      Selection Sort is an in-place comparison algorithm that divides 
      the list into two parts: the sorted and the unsorted part. Initially, the sorted 
      part is empty. The algorithm selects the smallest element from the unsorted list, 
      swaps it with the leftmost unsorted element, and grows the sorted portion of the list 
      one element at a time. Although simple, Selection Sort is inefficient for large datasets, 
      with a time complexity of O(n²).
    `,
    heapSort: `
      Heap Sort is a comparison-based sorting algorithm using a binary heap. It builds a max-heap from the input array, where the largest element is at the root. Then, it swaps the root with the last element, reduces the heap size, and re-heapifies. This process repeats until the array is sorted. The time complexity is O(n log n), and it’s an in-place algorithm.
    `
  };

  return (
    <div className="algo-description">
      <h3>{algo}</h3>
      <p>{algoDescriptions[algo]}</p>
    </div>
  );
};

export default AlgoDescription;
