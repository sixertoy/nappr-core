import compose from './compose';

type Func<T = unknown, R = unknown> = (value: T) => R;

const pipe = <T = unknown>(...fns: Func[]): Func<T, T> => {
  const reversed = [...fns].reverse();
  return compose(...reversed) as Func<T, T>;
};
export default pipe;
