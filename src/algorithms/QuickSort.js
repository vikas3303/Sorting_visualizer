let order = [];

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const partition = (dupBlocks, l, r) => {
    const pivot = dupBlocks[l];
    let j = l;

    for (let i = l + 1; i <= r; i++) {
        order.push([i, l, null, null]);
        if (dupBlocks[i] < pivot) {
            j++;
            swap(dupBlocks, i, j);
            order.push([i, j, [...dupBlocks], null]);
        }
    }

    swap(dupBlocks, l, j);
    order.push([l, j, [...dupBlocks], null]);
    order.push([null, null, null, j]);
    return j;
};

const quickSortHelper = (dupBlocks, l, r) => {
    if (l < r) {
        const m = partition(dupBlocks, l, r);
        quickSortHelper(dupBlocks, l, m - 1);
        quickSortHelper(dupBlocks, m + 1, r);
    } else if (l === r) {
        order.push([null, null, null, l]);
    }
};
const quickSort = (blocks) => {
    order = [];
    const dupBlocks = [...blocks];

    quickSortHelper(dupBlocks, 0, dupBlocks.length - 1);
    return order;
};

export default quickSort;
