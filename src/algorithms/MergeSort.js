let order = [];

const merge = (arr, l, mid, r) => {
    let i = l, j = mid + 1
    const temp = [];

    while (i <= mid && j <= r) {
        order.push([i, j, null, null]);
        if (arr[i] <= arr[j]) {
            temp.push(arr[i++]);
        } else {
            temp.push(arr[j++]);
        }
    }

    while (i <= mid) {
        temp.push(arr[i]);
        order.push([i, null, null, null]);
        i++;
    }

    while (j <= r) {
        temp.push(arr[j]);
        order.push([null, j, null, null]);
        j++;
    }

    for (let k = l; k <= r; k++) {
        arr[k] = temp[k - l];
        order.push([k, null, arr.slice(), null]); // Updated
    }
};

const mergeSortHelper = (arr, l, r) => {
    if (l >= r) return;
    const mid = Math.floor((l + r) / 2);
    mergeSortHelper(arr, l, mid);
    mergeSortHelper(arr, mid + 1, r);
    merge(arr, l, mid, r);
};

const mergeSort = (blocks) => {
    order = [];
    const dupBlocks = blocks.slice();
    mergeSortHelper(dupBlocks, 0, dupBlocks.length - 1);

    for (let i = 0; i < dupBlocks.length; i++) {
        order.push([null, null, null, i]);
    }

    return order;
};

export default mergeSort;
