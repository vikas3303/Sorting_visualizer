const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const quickSort = (blocks) => {
    const order = [];
    const dupBlocks = [...blocks];

    const partition = (l, r) => {
        // Median-of-Three Pivot Selection
        const mid = Math.floor((l + r) / 2);
        const pivotCandidates = [l, mid, r];
        pivotCandidates.sort((a, b) => dupBlocks[a] - dupBlocks[b]);
        const pivotIndex = pivotCandidates[1];
        
        // Move pivot to the end temporarily
        swap(dupBlocks, pivotIndex, r);
        const pivot = dupBlocks[r];
        
        let storeIndex = l;
        for (let i = l; i < r; i++) {
            order.push([i, r, null, null]);
            
            if (dupBlocks[i] < pivot) {
                swap(dupBlocks, storeIndex, i);
                order.push([storeIndex, i, [...dupBlocks], null]);
                storeIndex++;
            }
        }
        
        // Place pivot in its correct position
        swap(dupBlocks, storeIndex, r);
        order.push([storeIndex, r, [...dupBlocks], null]);
        order.push([null, null, null, storeIndex]); 
        
        return storeIndex;
    };

    const quickSortHelper = (l, r) => {
        if (l < r) {
            const pivotIndex = partition(l, r);
            quickSortHelper(l, pivotIndex - 1);
            quickSortHelper(pivotIndex + 1, r);
        } else if (l === r) {
            order.push([null, null, null, l]); // Mark single element as finalized
        }
    };

    quickSortHelper(0, dupBlocks.length - 1);
    return order;
};

export default quickSort;