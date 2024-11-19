const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const bubbleSort = (blocks) => {
    const order = [];
    const dupBlocks = [...blocks];

    for (let i = 0; i < dupBlocks.length; i++) {
        for (let j = 0; j < dupBlocks.length - i - 1; j++) {
            order.push([j, j + 1, null, null]);

            if (dupBlocks[j] > dupBlocks[j + 1]) {
                swap(dupBlocks, j, j + 1);
                order.push([j, j + 1, [...dupBlocks], null]);
            }
        }
        order.push([null, null, null, dupBlocks.length - i - 1]);
    }

    return order;
};

export default bubbleSort;
