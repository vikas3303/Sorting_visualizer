import React, { useState, useEffect,useRef } from "react";

import Navbar from "./components/Navbar";
import Bars from "./components/Bars";
import AlgoDescript from "./components/AlgoDescription";

import bubbleSort from "./algorithms/BubbleSort";
import selectionSort from "./algorithms/SelectionSort";
import insertionSort from "./algorithms/InsertionSort";
import mergeSort from "./algorithms/MergeSort";
import quickSort from "./algorithms/QuickSort";
import heapSort from "./algorithms/HeapSort";

function App() {
  const generateRandomArray = (len) => {
    setCompleted(false);
    setSorting(false);
    setSortedIndex([]);

    const randomArray = Array.from(Array(len + 1).keys()).slice(1);

    for (let i = randomArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i - 1));
      const temp = randomArray[i];
      randomArray[i] = randomArray[randomIndex];
      randomArray[randomIndex] = temp;
    }

    setBlocks(randomArray);
  };

  // States
  const [algo, setAlgo] = useState("bubbleSort");
  const [len, setLength] = useState(30);
  const [blocks, setBlocks] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [completed, setCompleted] = useState(true);
  const [speed, setSpeed] = useState(250);
  const [compare, setCompare] = useState([]);
  const [swap, setSwap] = useState([]);
  const [sortedIndex, setSortedIndex] = useState([]);
  // const [algoDescription, setAlgoDescription] = useState("");

  
  useEffect(() => {
    generateRandomArray(len);
  }, [len]);

  const handleAlgo = (event) => {
    setAlgo(event.target.value);
  };

  const handleLength = (event) => {
    setLength(Number(event.target.value));
  };

  const handleSpeed = (event) => {
    setSpeed(Math.ceil(400 / Number(event.target.value)));
  };

  // useEffect(() => {
  //   setAlgoDescription(algoDescriptions[algo]); 
  // }, [algo]);

  const speedRef = useRef(speed); 
  const orderRef = useRef([]); 
  useEffect(()=>{
    speedRef.current=speed
  },[speed]);

  const handleSort = () => {
    const sortAccOrder = (order) => {
      orderRef.current = order; 
      let i = 0;

      const loop = () => {
        if (i >= order.length) {
          setSorting(false);
          setCompleted(true);
          return;
        }

        const [j, k, arr, index] = order[i];

        setCompare([j, k]);
        setSwap([]);

        // if (index !== null) {
        //   setSortedIndex((prevState) => [...prevState, index]);
        // }

        if (arr) {
          setBlocks(arr);
          if (j !== null || k !== null) setSwap([j, k]);
        }

        i++;
        setTimeout(loop, speedRef.current);
      };

      loop();
    };
     
    setSorting(true);
    algo === "bubbleSort"
      ? sortAccOrder(bubbleSort(blocks))
      : algo === "selectionSort"
      ? sortAccOrder(selectionSort(blocks))
      : algo === "insertionSort"
      ? sortAccOrder(insertionSort(blocks))
      : algo === "mergeSort"
      ? sortAccOrder(mergeSort(blocks))
      : algo === "quickSort"
      ? sortAccOrder(quickSort(blocks))
      : algo === "heapSort"
      ? sortAccOrder(heapSort(blocks))
      : (() => {
          setSorting(false);
          setCompleted(true);
        })();
  };

  return (
    <div className="App">
      <Navbar
        generateRandomArray={() => generateRandomArray(len)}
        handleLength={handleLength}
        handleSpeed={handleSpeed}
        handleAlgo={handleAlgo}
        handleSort={handleSort}
        sorting={sorting}
        completed={completed}
        len={len}
        speed={speed}
        algo={algo}
      />

      <Bars
        blocks={blocks}
        compare={sorting && compare}
        swap={sorting && swap}
        sorted={sortedIndex}
      />

      <AlgoDescript 
        algo={algo} 
      />
    </div>
  );
}

export default App;
