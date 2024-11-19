const insertionSort = (blocks) => {
    const order = [];
    const dupBlocks = [...blocks]; // Shallow copy

    for (let i = 1; i < dupBlocks.length; i++) {
        let key = dupBlocks[i], j = i - 1;

        order.push([i, null, null, null]);

        while (j >= 0 && dupBlocks[j] > key) {
            dupBlocks[j + 1] = dupBlocks[j];
            order.push([j, j + 1, [...dupBlocks], null]);
            j--;
        }

        dupBlocks[j + 1] = key;
        order.push([j + 1, null, [...dupBlocks], null]);
    }

    // Mark elements as sorted
    for (let i = 0; i < dupBlocks.length; i++) {
        order.push([null, null, null, i]);
    }

    return order;
};

export default insertionSort;
