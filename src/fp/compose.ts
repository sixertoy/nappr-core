type Func<T = unknown, R = unknown> = (value: T) => R;

export const compose = <T = unknown>(...fns: Func[]): Func<T, T> => {
  const reversed = [...fns].reverse();
  return reversed.reduce(
    (prev, next) => (value: T) => next(prev(value)) as T,
    (value: T): T => value,
  ) as Func<T, T>;
};
