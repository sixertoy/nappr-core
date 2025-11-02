const nodesToArray = <T extends Node>(elts: NodeListOf<T> | T[]): T[] =>
  Array.prototype.slice.call(elts).map((item) => item);
export default nodesToArray;
