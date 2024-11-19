const heapSort = (blocks) => {
  const order = [];
  const dupBlocks = [...blocks];

  const heapify = (n, i) => {
      let largest = i;
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      if (left < n && dupBlocks[left] > dupBlocks[largest]) {
          largest = left;
      }

      if (right < n && dupBlocks[right] > dupBlocks[largest]) {
          largest = right;
      }

      if (largest !== i) {
          [dupBlocks[i], dupBlocks[largest]] = [dupBlocks[largest], dupBlocks[i]];
          order.push([i, largest, [...dupBlocks], null]);
          heapify(n, largest);
      }
  };

  const n = dupBlocks.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(n, i);
  }

  for (let i = n - 1; i > 0; i--) {
      [dupBlocks[0], dupBlocks[i]] = [dupBlocks[i], dupBlocks[0]];
      order.push([0, i, [...dupBlocks], null]);
      heapify(i, 0);
  }

  for (let i = 0; i < dupBlocks.length; i++) {
      order.push([null, null, null, i]);
  }

  return order;
};

export default heapSort;
