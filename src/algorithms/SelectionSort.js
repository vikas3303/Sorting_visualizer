const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const selectionSort = (blocks) => {
    const dupBlocks = [...blocks];
    const order = [];

    for (let i = 0; i < dupBlocks.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < dupBlocks.length; j++) {
            order.push([i, j, null, null]);
            if (dupBlocks[j] < dupBlocks[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(dupBlocks, i, minIndex);
            order.push([i, minIndex, [...dupBlocks], null]);
        }
        order.push([null, null, null, i]);
    }

    return order;
};

export default selectionSort;
