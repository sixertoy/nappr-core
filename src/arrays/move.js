function move(arr, from, to) {
  const item = arr[from];
  const { length } = arr;
  const diff = from - to;

  if (diff > 0) {
    // move left
    return [
      ...arr.slice(0, to),
      item,
      ...arr.slice(to, from),
      ...arr.slice(from + 1, length),
    ];
  }
  if (diff < 0) {
    // move right
    const targetIndex = to + 1;
    return [
      ...arr.slice(0, from),
      ...arr.slice(from + 1, targetIndex),
      item,
      ...arr.slice(targetIndex, length),
    ];
  }
  return arr;
}

export default move;
