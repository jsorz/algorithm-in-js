const swap = (arr, i1, i2) => {
  if (Array.isArray(arr)) {
    let tmp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = tmp;
  }
};

export default swap;
